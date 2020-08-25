from flask import Flask, request
import os
from flask_cors import CORS
from werkzeug.utils import secure_filename

PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '{}/leafs/'.format(PROJECT_HOME)

app = Flask(__name__)
cors = CORS(app)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = set(['jpg','png'])

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

# upload_ plant
@app.route('/upload_leaf', methods=["POST"])
def upload_leaf():
    file = request.files['image']
    print(file)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        _path = os.path.abspath("/Users/kelly/Desktop/blob_test/plants")

        return filename





if __name__ == "__main__":
    app.run()
