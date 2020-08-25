from flask import Flask, request, json
from flask_cors import CORS
from DataLayer.BaseDataLayer import *
import os

app = Flask(__name__)
cors = CORS(app)

baseDB = BaseDataLayer()
PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '{}/uploads/'.format(PROJECT_HOME)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# analyze leaf
@app.route('/analyze_leaf', methods=['POST'])
def analyse_leaf():
    image = request.files['image']
    photo_path = baseDB.add_leaf_to_fs(image, app, UPLOAD_FOLDER)
    # todo: analyze_leaf(photo_path) -> imported from DS.py
    # todo: if plant is not exist: add_plant()-> imported from SqlDataLayer()
    # todo: if plant exists: update_plant() (healthy/sick)-> imported from SqlDataLayer
    # todo:  add_leaf(photo_path, plant_id) -> imported from SqlDataLayer

    return app.response_class(response=json.dumps({'status': 'healthy', 'photo_path': photo_path}),
                              status=200,
                              mimetype="application/json")


if __name__ == "__main__":
    app.run()
