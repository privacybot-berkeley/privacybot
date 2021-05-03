# PrivacyBot

## What is PrivacyBot?
This is a simple automated service to initiate CCPA deletion requests with [databrokers](https://docs.google.com/spreadsheets/d/1JY5bPJKBSnqgfC1JMMAkpXloIk_4rwJbvKoerZPw31w/edit#gid=0).

## Create the labels in your GMAIL account
Before proceeding with the installation of this app, create a label called "PrivacyBot" for all emails with "CCPA Data Deletion Request" in the subject line in your GMAIL account (this is the account you will be using in Step 6 while entering your personal details). 

This will ensure easier management of emails with data brokers. 

You can follow this link to know more about how to create labels: https://support.google.com/mail/answer/6579?hl=en

## Requirements  (Prerequisites)
Tools and packages required to successfully install this project.
For example:
* Install Python 3 (https://link-for-setup-guide)
* Install pip 3 (https://pip.pypa.io/en/stable/installing/)
* Install node https://nodejs.org/en/download/ 
* Install Visual Studio Code or an editor of your choice.

#### 1. Download zip file from Github Repo and unzip 

#### 2. Open Visual Studio Code and open the “privacybot-private-main” folder 

#### 3. Open split terminal in VS Code (or any two terminals/cmd prompts on your machine). We will be using one terminal to run the Flask app and the other one to run the React app.


## Start the Flask Server 

#### 1. Create and activate a Python Virtual Environment 

The below commands create and activate a virtual environment named "PB_venv". 

`$ python3 -m venv PB_venv` 

`$ source PB_venv/bin/activate`

#### 2. Install from requirements.txt

`$ pip3 install -r requirements.txt`

To confirm required packages are installed - see if “flask_cors” is installed:
`$ pip3 list`

#### 3: Start Flask App
Run the below commands within the activated virtual environment.

`$ cd app`

`$ flask run`

The above commands should start the flask application. It can now be accessed through http://127.0.0.1:5000/

Leave this terminal instance as is, and open the second terminal instance. 

## Start the React Application
PFB a step by step list of commands / guide that informs how to install an instance of the React Server. 

#### 1. Run the following commands in the second terminal: 

`$ cd PB_UI`

#### 2. Check to make sure node and npm is correctly installed

`$ node -v`

`$ npm-v`

#### 3. Install the required packages using npm install. Fix any vulnerabilities found. 
`$ npm install`

`$ npm audit fix`

#### 4. Start the React Application by running the below commands
`$ npm run build`

`$ npm start`

#### 5. Follow the steps and authenticate your Gmail account 

#### 6. Remove access to PrivacyBot from your Gmail account
