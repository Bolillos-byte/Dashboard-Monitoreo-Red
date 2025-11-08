import psutil
import json
import socket

def obtener_metricas():
    return {
        "host": socket.gethostname(),
        "cpu": psutil.cpu_percent(interval=0.5),
        "ram": psutil.virtual_memory().percent,
        "disco": psutil.disk_usage("/").percent
    }

def cargar_config(ruta="config.json"):
    try:
        with open(ruta, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}