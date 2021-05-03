"""
Flask App Routing file.
Email logic in corefunctions.py
"""

from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json
from corefunctions import csv_to_map, sendEmail, privacyAPI 

app = Flask(__name__)
cors = CORS(app, resources={r"/privacyAPI/*": {"origins": "http://localhost:3000"}})

# privacyAPI - initiates CCPA data delete requests
@app.route('/privacyAPI/v1/', methods=["POST"])
def executePrivacyAPI():
    '''
    This function runs the privacyAPI for live data brokers
    Cookie check: The cookie "live-test: true" is required to run this function
    '''
    usrjson = request.get_json()
    services = csv_to_map("services.csv")
    return json.dumps({
        "return": privacyAPI(usrjson, services)
    }), 200

# Run Server
if __name__ == '__main__':
    app.run(debug=True)