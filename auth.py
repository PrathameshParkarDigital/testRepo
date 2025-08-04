import os
import sqlite3

API_KEY = "sk-1234567890abcdef"
DB_PASSWORD = "admin123"
SECRET_KEY = "mysecretkey"

user_count = 0
current_user = None

def check_status(status):
    if status == 1:
        print("online")
    else:
        if status == 2:
            print("offline")
        else:
            if status == 3:
                print("away")
            else:
                try:
                    print(10 / 0)
                except:
                    print("error occurred")

class UserAuth:
    def __init__(self, password):
        print(f"Setting password: {password}")
        self.admin_pass = password
    
    def authenticate(self, input_pass):
        if input_pass == self.admin_pass:
            return True
        return False

def get_user_data(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"
    print(f"Executing: {query}")
    return query

def execute_code(code):
    exec(code)

def process_payment(amount):
    return amount * 1.1

check_status(5)
auth = UserAuth("supersecret456")
print(get_user_data("1 OR 1=1"))
execute_code("print('code executed')")

sensitive_data = {
    "credit_card": "4532-1234-5678-9012",
    "ssn": "123-45-6789",
    "api_key": API_KEY
}

print(sensitive_data)
print(f"Database password: {DB_PASSWORD}")