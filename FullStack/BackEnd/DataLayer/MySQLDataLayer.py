import mysql.connector
from decouple import config
from flask import Flask, json, session, redirect, url_for
from flask_mysqldb import MySQL
from DataLayer.BaseDataLayer import BaseDataLayer


class MySqlDataLayer(BaseDataLayer):
    def __init__(self, plant_name):
        super().__init__()
        self.plant_id =
        self.leaf_id =
        self.plant_name =
        self.state =
        self.create_date =
        self.file_path =
        self.__connect()


    def add_plant(self):
        try:
            cursor = self.__mydb.cursor()
            self.__mydb.start_transaction()
            sql_plant = "INSERT INTO plants (id, plant_name, state, create_date) VALUES (%s, %s, %s, %s)"
            val_plant = (self.plant_id, self.plant_name, self.state, self.create_date)
            cursor.execute(sql_plant, val_plant)
            self.__mydb.commit()
            print(cursor.rowcount, "record inserted.")
            return True

        except mysql.connector.Error as error:
            print("failed to update Plants", error)

        finally:
            cursor.close()


    def update_plant(self):
        pass

    def save_leaf(self, photo_path, plant_id)
        try:
            cursor = self.__mydb()
            self.__mydb.start_transaction()
            sql_leaf = "INSERT INTO leafs (id, file_path, create_date) VALUES (%s, %s, %s)"
            val_leaf = (self.leaf_id, self.plant_id, self.file_path, self.create_date)
            cursor.execute(sql_leaf, val_leaf)
            self.__mydb.commit()
            print(cursor.rowcount, "record inserted")
            return True

        except mysql.connector.Error as error:
            print("failed to update Leafs", error)

        finally:
            cursor.close()


    def get_leaf_id(self):
        pass


    def shutdown_db(self):
        self.__mydb.close()

    def __connect(self):
        self.__mydb = mysql.connector.connect(
            user=config('MYSQL_USER'),
            passwd=config('PASSWORD'),
            database="tree_whisperer"
        )
        self.__mydb.autocommit = True

