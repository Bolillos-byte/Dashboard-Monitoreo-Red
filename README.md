# Dashboard de Monitoreo de Red

Panel web en tiempo real para visualizar métricas de sistema y hosts remotos (CPU, RAM, disco). Diseñado como herramienta para técnicos, administradores y laboratorios que necesitan una vista rápida del estado de la infraestructura.

---

## Tecnologías
- Python 3
- Flask
- psutil
- Chart.js (frontend)
- (Opcional) Requests para consumo remoto; SNMP para entornos avanzados

---

## Funcionalidades
- API local que expone métricas en JSON (`/api/metricas`)  
- Frontend con gráficos en tiempo real (Chart.js)  
- Configuración mediante `config.json` (intervalo de refresco, puntos máximos)  
- Soporte básico para agregar hosts remotos vía agentes o peticiones a `/api/metricas?host=IP`  
- Plantilla lista para escalar a autenticación, persistencia histórica y alertas

---

## Requisitos e instalación
1. Clona el repositorio.  
2. Crea y activa un entorno virtual (recomendado).  
3. Instala dependencias:
`bash
pip install -r requirements.txt

Contenido mínimo de requirements.txt:
flask
psutil



Configuración
config.json (opcional):
{
  "refresh_ms": 2000,
  "max_points": 20,
  "host": "localhost"
}



Uso
- Ejecuta el servidor:
python app.py


- Abre en tu navegador: http://localhost:5000
Puntos finales útiles:- /api/metricas → Devuelve métricas del host local en JSON.
- / → Interfaz web con gráficos en tiempo real
