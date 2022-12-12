from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

db = 'ufc'

class Fight:

        def __init__(self, data):
        self.id = data['id']


    @classmethod
    def create_one(cls, info):
        query = 'insert into ufc.my_ufc_fighters (first_name, last_name, strength, accuracy, age, td_defense, td_offense, experince,  Base_UFC_Fighters_id, Users_id) values (%(first_name)s, %(last_name)s, %(strength)s, %(accuracy)s, %(age)s, %(td_defense)s, %(td_offense)s, %(Base_UFC_Fighters_id)s, %(Users_id)s)'
        data = {
            "first_name": info['first_name'],
            "last_name": info['last_name'],
            "strength": info['strength'],
            "accuracy": info['accuracy'],
            "age": info['age'],
            "td_offense": info['td_offense'],
            "td_defense": info['td_defense'],
            "Base_UFC_Fighters_id": info['Base_UFC_Fighters_id'],
            "Users_id": session['uuid']
        }
        return connectToMySQL(db).query_db(query, data)


    #Move Validation
    @staticmethod
    def validate_attack(form_info):
        is_valid = True
        
        if len(form_info['energy']) == 0:
            is_valid = False
            flash("You are too tired to do that")


        return is_valid