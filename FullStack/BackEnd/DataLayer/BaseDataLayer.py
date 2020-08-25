from werkzeug.utils import secure_filename
import os


class BaseDataLayer:
    def __init__(self):
        self.ALLOWED_EXTENSIONS = {'jpg', 'png'}

    def add_plant(self):
        pass

    def update_plant(self):
        pass

    def save_leaf(self, photo_path):
        pass

    def get_leaf_id(self):
        pass

    def allowed_file(self, filename):
        return '.' in filename and \
               filename.rsplit('.', 1)[1] in self.ALLOWED_EXTENSIONS

    def add_leaf_to_fs(self, image, app, UPLOAD_FOLDER, unique_id):
        print(image)
        if image and self.allowed_file(image.filename):
            old_filename = secure_filename(image.filename)
            old_file_ext = old_filename.split(".", 1)[1]
            filename = str(unique_id) + f'.{old_file_ext}'
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            filepath = f'{UPLOAD_FOLDER}{filename}'
            return filepath