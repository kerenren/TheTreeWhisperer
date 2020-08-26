from flask import Flask, request, json
from flask_cors import CORS
from DataLayer.BaseDataLayer import *
import os
import uuid
from tensorflow.keras.models import load_model
import pickle
from tree_doctor.tree_doctor import leaf_doctor
# from DataLayer.MySQLDataLayer import MySqlDataLayer

app = Flask(__name__)
cors = CORS(app)
# mySql = MySqlDataLayer()

baseDB = BaseDataLayer()
PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '{}/uploads/'.format(PROJECT_HOME)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
unique_id = uuid.uuid1()

model = load_model(f"{PROJECT_HOME}/tree_doctor/saved_model/nir_model_leaf")
le = pickle.load(open(f"{PROJECT_HOME}/tree_doctor/label_encoder.pkl", 'rb'))


# analyze leaf
@app.route('/analyze_leaf', methods=['POST'])
def analyse_leaf():
    image = request.files['image']
    photo_path = baseDB.add_leaf_to_fs(image, app, UPLOAD_FOLDER, unique_id)
    result = leaf_doctor(photo_path, model, le)
    geo_info = baseDB.get_geo_by_photo_path(photo_path)
    print(geo_info)

    # todo: if plant is not exist: add_plant()-> imported from SqlDataLayer()
    # todo: if plant exists: update_plant(result) (healthy/sick)-> imported from SqlDataLayer
    # todo:  add_leaf(photo_path, plant_id) -> imported from SqlDataLayer
    # todo: last_leaf_id = get_leaf_id() -> imported from SqlDataLayer

    return app.response_class(response=json.dumps({'status': result,
                                                   'photo_path': photo_path,
                                                   'geo_info': geo_info}),
                              status=200,
                              mimetype="application/json")


if __name__ == "__main__":
    app.run()
