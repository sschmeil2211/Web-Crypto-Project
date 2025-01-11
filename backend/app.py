from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import os
from dotenv import load_dotenv


# Load variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configurations in MySQL
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', 'password')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'crypto_db')

mysql = MySQL(app)

# Login route
@app.route('/auth/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Verify data from base
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()
    cursor.close()

    if user:
        return jsonify({"message": "Login exitoso", "token": "fake-token-123"})
    return jsonify({"message": "Usuario o contraseña incorrectos"}), 401

if __name__ == '__main__':
    app.run(debug=True)

