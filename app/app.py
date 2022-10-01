from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(__name__)


CORS(app, resources={r"/*":{'origins':"*"}})
#CORS(app, resources={r'/*':{'origins':'http://localhost:8080',"allow_headers":"Access-Control-Allow-Origin"}})

import auth

@app.route('/',methods=['GET'])
def greetings():
    return("Hello, World!")

if __name__ == '__main__':
	app.run(debug=True)