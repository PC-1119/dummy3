#checking
from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    response = requests.get('https://example.com')
    return f"Hello World! External call status: {response.status_code}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
