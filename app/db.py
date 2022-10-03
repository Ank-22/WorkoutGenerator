import os
from typing import Optional, Literal
from pydantic import BaseModel, Field
from pymongo import MongoClient

from dotenv import load_dotenv
load_dotenv()

url = os.getenv("MONGO_URI") 
client = MongoClient(url)
db = client.workout

class UserSchema(BaseModel):
    name: str = Field(...)
    username: str = Field(...)
    password: str = Field(...)
    dob: str = Field(...)
    gender: Literal['male', 'female']

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message
    }

def ErrorResponseModel(error, code, message):
    return {
        "error": error,
        "code": code,
        "message": message
    }
