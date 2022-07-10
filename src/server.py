from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/config")
def data_get():
    f = open('sample.json')
    data = json.load(f)
    f.close()
    return data


@app.route("/config", methods=['POST'])
def data_post():
    data = request.json
    print(data)
    f = open('sample.json', 'w')
    json.dump(data, f, indent=4)
    f.close()
    return {"message":"Data Updated!"}