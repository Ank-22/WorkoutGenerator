import json
import os
from app import app
from flask import request, jsonify
from db import db, ResponseModel, ErrorResponseModel
import hashlib
from flask_jwt_extended import create_access_token, JWTManager
import datetime
from dotenv import load_dotenv
load_dotenv()

jwt = JWTManager(app) 
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1) 

users_collection = db["users"]

@app.route("/register", methods=["POST"])
def register():
	new_user = request.get_json()
	new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() 
	doc = users_collection.find_one({"username": new_user["username"]}) 
	if not doc:
		users_collection.insert_one(new_user)
		return jsonify({'msg': 'User created successfully'}), 201
	else:
		return jsonify({'msg': 'Username already exists'}), 409


@app.route("/login", methods=["POST"])
def login():
	login_details = request.get_json()
	print(login_details)
	user_from_db = users_collection.find_one({'username': login_details['username']}) 

	if user_from_db:
		encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
		if encrpted_password == user_from_db['password']:
			access_token = create_access_token(identity=user_from_db['username'])
			return jsonify({"access_token": access_token}), 200

	return jsonify({"error":"Something went wrong" }), 400