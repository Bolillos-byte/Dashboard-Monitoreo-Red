from flask import Flask, render_template, jsonify
from monitoreo import obtener_metricas

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/metricas")
def metricas():
    return jsonify(obtener_metricas())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)