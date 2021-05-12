"""
Convert CSV to Dictionary, Write and Send Emails.
"""

import csv, os, glob
from Google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def csv_to_map(csv_file):
    """
    converts csv of services to map, returns services map
    Ex: services["AcmeData"]["privacy_dept_contact_email"] = "privacy@acmedata.com"...
    """
    all_services = {}
    top_choice = {}
    people_search = {}
    with open(csv_file, 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        cols = next(csv_reader) 
        # cols = ['service_name', 'service_source', 'category', 'topchoice', 'service_privacy_url', 'privacy_dept_contact_email', ...]
        for line in csv_reader:
            # LINE: ['databroker1', 'service_source1', 'category1', 'YES/NO', 'https://someprivacyurl.com/', 'privacy@this.does.not.exist', 'T/F', 'T/F',...]
            line = [True if x == 'TRUE' else False if x == 'FALSE' else x for x in line]
            # creates the map schemas we want
            submap = dict(zip(cols[1:], line[1:]))
            all_services[line[0]] = submap
            if submap['top_choice'] == 'YES':
                top_choice[line[0]] = submap
                people_search[line[0]] = submap
            elif submap['category'] == 'people search':
                people_search[line[0]] = submap
    return all_services, top_choice, people_search

def createLabel(service):
    '''
    Creates a new label/gets the ID of label already named "PrivacyBot".
    '''
    # Create a label called PrivacyBot if it doesn't exist.
    results = service.users().labels().list(userId='me').execute()
    labels = results.get('labels', [])
    if not labels:
        create_label = True
    else:
        for label in labels:
            if label["name"] == "PrivacyBot":
                label_id = label["id"]
                create_label = False
                print("Label PrivacyBot with id %s already exists. Using the same label for the mails being sent..." % label_id)
                break
        else:
            create_label = True
    if create_label:
        created_label = service.users().labels().create(userId='me', body={"name": "PrivacyBot", "labelListVisibility": "label_show", "messageListVisibility": "show"}).execute()
        label_id = created_label["id"]
        print("Label PrivacyBot does not exist. Creating label with name PrivacyBot with id %s..." % label_id)
    
    return label_id

def sendEmail(usrjson, services_map):
    '''
    This function:
    - initiates the OAuth flow with GMAIL API and upon successful authentication,
    - Creates a label named "PrivacyBot"
    - Drafts and sends the CCPA Data Delete request email to the chosen list of data brokers
    '''
    CLIENT_SECRET_FILE = 'client_secret.json'
    API_NAME = 'gmail'
    API_VERSION = 'v1'
    SCOPES = ['https://www.googleapis.com/auth/gmail.modify']
    
    gmail_service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)

    # Create a new label or use an existing label named "PrivacyBot"
    label_id = createLabel(gmail_service)
    
    # List of brokers used in confirmation email sent to the end user at the end of the transaction
    sent_brokers = ""
    notsent_brokers = ""

    # Allowed PII Attributes
    pii = {
        "firstname":"First Name",
        "lastname":"Last Name", 
        "email":"Email",
        "full_address":"Address",
        "city":"City",
        "state":"State",
        "zip":"Zip",
        "country":"Country",
        "dob":"Date of birth",
        "age":"Age",
        "phone_num":"Phone Number",
        "cc_last4":"Last 4 digits of credit card",
        "device_ad_id":"Device Advertising ID",
        "twitter_handle":"Twitter handle",
        "link_to_profile":"Profile link"}

    # Create the chosen_services_map

    for service in services_map:
        submap = services_map[service] # build the service submap
        broker_email = submap["privacy_dept_contact_email"]
        
        # Build the user's data that will be sent to the data broker.
        userdata = []
        # go through info that a specific service wants
        for attribute in pii:
            if submap[attribute] == True:
                if attribute in usrjson:
                    userdata.append(pii[attribute] + ": " + usrjson[attribute])
                
        ordered_list = ""
        for item in userdata:
            ordered_list += "<li>" + str(item) + "</li>"

        # Write the message body - using usrjson, fill only those details as required from each data broker
        emailMsg = """\
        <html>
        <head>
            <h1 align="center"> CCPA Deletion Request </h1>
        </head>
        <body>
            <p>Hello! <br/>
            I wish to exercise my rights under the California Consumer Privacy Act (CCPA). <br/>
            I request that your business complies with the following requests which are granted to me by the CCPA: <br/>
            <ol>
                <li>Right to Delete</li>
                <li>Right to not sell my information</li>
            </ol>
            </p>
            
            <p>
            My details are:<br/>
            <ol>
                {code}
            </ol>
            </p>
            <p>
            Let me know if you have any questions.
            </p>
            <br/>
            <p>
            In the case that no email or user name information exists in your records, under the CCPA the above information can only be used for verification purposes and you may not collect it.
            </p>
        </body>
        </html>
        """.format(code=ordered_list)
        
        # Fill the email fields
        # Set reply-to address. All the follow up emails from data brokers will be sent to this address.
        reply_to_addr = usrjson['email']
        mimeMessage = MIMEMultipart()
        mimeMessage['to'] = broker_email
        mimeMessage['subject'] = 'CCPA Data Deletion Request - ' + service
        mimeMessage.add_header('reply-to', reply_to_addr)
        mimeMessage.attach(MIMEText(emailMsg, 'html'))
        raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()
        
        email_notsent = False

        # Try sending the email. Catch an exception in case the email cannot be sent. 
        try:
            message = gmail_service.users().messages().send(userId='me', body={'raw': raw_string}).execute()
            message_id = message['id']
            label_msg = gmail_service.users().messages().modify(userId='me', id=message_id, body={"addLabelIds":[label_id,]}).execute()
        except:
            print("Email could not be sent to", service)
            email_notsent = True
    
        # List of data brokers to be used for confirmation email
        if email_notsent == False:
            if sent_brokers == "":
                sent_brokers += service
            else:
                sent_brokers += ", " + service
        else:
            if notsent_brokers == "":
                notsent_brokers += service
            else:
                notsent_brokers += ", " + service

    if notsent_brokers == "":
        sent_result = "Emails were sent to all chosen data brokers successfully."
    else:
        sent_result = "Emails could not be sent to " + notsent_brokers

    cnf_email = """\
        <html>
        <head>
            <h1 align="center">PrivacyBot Confirmation</h1>
        </head>
        <body>
            <p>Thank you for using PrivacyBot!</p>

            <p>So, what just happened?</p>
            <ol type="1">
            <li>You filled in the required data fields.</li>
                <ol type="a">
                <li>Data brokers needed to collect additional info to verify your identity and ensure they’re deleting the right person’s data. PrivacyBot only sent the minimum amount of information required for each data broker to delete your info, nothing more.</li>
                </ol>
            <li>Data deletion requests were sent from your email.</li>
                <ol type="a">
                <li>PrivacyBot is essentially a smart email routing tool. You just send CCPA data delete requests en masse right from your own email. PrivacyBot accessed your email through OAuth tokens and ran entirely from your own machine.</li>
                </ol>
            <li>Any replies/next steps will be sent to your inbox.</li>
                <ol type="a">
                <li>Any follow-ups from the companies themselves will go directly back to you. All further communications will be between you and the company, we just helped to kick start the process.</li>
                </ol>
            </ol>
            If you selected a subset of data brokers that require some follow-up, they will be following up with you directly. Some possible responses you may be receiving include:
            <ol type="1">
            <li>The form fill out</li>
                <ol type="a">
                <li>Some companies will respond with a form they want you to fill out, regardless of how much info you included in the email. This may be because email was not one of their accepted methods of CCPA deletion requests, but they will still send you the link to the form you need to fill out, making it easier for you to submit your deletion request.</li>
                <li>E.g “For privacy inquiries, please contact us by filling out the "Privacy Choices and Data Subject Rights" form available at [Link]”</li>
                </ol>
            <li>The confirmation email</li>
                <ol type="a">
                <li>The number of these you will get will vary depending on how many data fields you included in your requests - if you included all of them, odds are you’ll be getting a lot of these. More often than not, these don’t require any response from you and are merely confirming receipt of your request.</li>
                <li>E.g “This will confirm that we have received your request to delete your information from the database.” </li>
                </ol>
            <li>The information ask</li>
                <ol type="a">
                <li>Again depending on how many data fields you included in your request, you may receive a lot or only a few of these responses. These will happen when you did not input enough data into the deletion request, and merely require you to include some additional information. Whether you want to supply that information is up to you, but be assured that companies are legally not allowed to save any of that data they request from you.
                <li>E.g “Please confirm the following additional information about yourself: Your full residential address.”
                </ol>
            </ol>
            Again, thank you for using PrivacyBot! Here’s a link to our Privacy Policy and our <a href="https://privacybot.io/FAQ">FAQ</a> if you have any other questions! <br/>
            </br>
            <h2> Please remove permissions for PrivacyBot from your Gmail account. </h2></br>
            <br/><br/>
            Best,<br/>
            The PrivacyBot Team<br/>
    
        </body>
        </html>
        """.format(sentresult=sent_result) 
    # Send confirmation email
    # reply_to_addr = usrjson['email']
    cnfMessage = MIMEMultipart()
    cnfMessage['to'] = usrjson['email']
    cnfMessage['subject'] = 'PrivacyBot Confirmation'
    cnfMessage.attach(MIMEText(cnf_email, 'html'))
    cnf_string = base64.urlsafe_b64encode(cnfMessage.as_bytes()).decode()
    cnf_message = gmail_service.users().messages().send(userId='me', body={'raw': cnf_string}).execute()
    cnf_message_id = cnf_message['id']
    cnf_label = gmail_service.users().messages().modify(userId='me', id=cnf_message_id, body={"addLabelIds":[label_id,]}).execute()

    # Delete the token file
    for filename in glob.glob("token_gmail*"):
        os.remove(filename)

def privacyAPI(usrjson, service_map):
    '''
    This function initiates the logic of sending request-to-delete emails to data brokers.
    '''
    sendEmail(usrjson, service_map)

