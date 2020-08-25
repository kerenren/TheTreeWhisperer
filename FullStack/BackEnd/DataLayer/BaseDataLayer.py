from werkzeug.utils import secure_filename
import os
from flask import request


class BaseDataLayer:
    def __init__(self):
        self.ALLOWED_EXTENSIONS = set(['jpg','png'])

    def add_plant(self):
        pass

    def save_leaf(self, photo_path, plant_id):
        pass


    def allowed_file(self, filename):
        return '.' in filename and \
               filename.rsplit('.', 1)[1] in self.ALLOWED_EXTENSIONS

    def add_leaf_to_fs(self, app, UPLOAD_FOLDER):
        file = request.files['image']
        print(file)
        if file and self.allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            filepath = f'{UPLOAD_FOLDER}/{filename}'
            return filepath