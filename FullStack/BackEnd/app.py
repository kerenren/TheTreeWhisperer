from flask import Flask, request
from flask_cors import CORS
from DataLayer.BaseDataLayer import *
import os


app = Flask(__name__)
cors = CORS(app)

baseDB= BaseDataLayer()
PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '{}/uploads/'.format(PROJECT_HOME)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



# upload_ leaf to local os
@app.route('/upload_leaf', methods=["POST"])
def upload_leaf():
    file_path = baseDB.add_leaf_to_fs(app, UPLOAD_FOLDER)
    return file_path


if __name__ == "__main__":
    app.run()
