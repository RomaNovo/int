from flask import Flask, send_from_directory, jsonify
import os

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

@app.route('/')
@app.route('/<path:file>')
def handle(file=None):
	if file == None: file = 'index.html'
	return send_from_directory(APP_ROOT + '/dist', file)

@app.route('/api/<path:json>')
def json(json):
	with open(APP_ROOT + '/dist/api/' + json) as file:
		return jsonify(file.read().replace('\n', '').replace('\t', ''))

if __name__ == "__main__":
	app.run(
		host='0.0.0.0', 
		port=8000, 
		debug=True
	)