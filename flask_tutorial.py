from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class Sudoku1(Resource):
    def get(self):
        return {"data" : "Sudoku1"}
    
api.add_resource(Sudoku1, "/Sudoku1")

if __name__ == "__main__":
    app.run(debug=True) 