# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, Float, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Setup
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})



# SQLite Database Config
DATABASE_URL = "sqlite:///sensor_data.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# Table definition
class SensorReading(Base):
    __tablename__ = "sensor_readings"
    id = Column(Integer, primary_key=True, index=True)
    temperature = Column(Float)
    humidity = Column(Float)
    co = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)


# Create the table
Base.metadata.create_all(bind=engine)

# Route: POST sensor data
@app.route("/api/sensor", methods=["POST"])
def receive_sensor_data():
    data = request.get_json()
    temperature = data.get("temperature")
    humidity = data.get("humidity")
    co = data.get("co")

    db = SessionLocal()
    reading = SensorReading(temperature=temperature, humidity=humidity, co=co)
    db.add(reading)
    db.commit()
    db.close()

    return jsonify({"status": "saved"})


# Route: GET latest 10 readings
@app.route("/api/readings", methods=["GET"])
def get_readings():
    db = SessionLocal()
    readings = db.query(SensorReading).order_by(SensorReading.timestamp.desc()).limit(10).all()
    db.close()

    return jsonify([
        {
            "temperature": r.temperature,
            "humidity": r.humidity,
            "co": r.co,
            "timestamp": r.timestamp.isoformat()
        } for r in readings
    ])

@app.route("/")
def home():
    return "<h2>Flask backend is running ✅</h2><p>Try visiting <a href='/api/readings'>/api/readings</a> to see sensor data.</p>"


# Run the server
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
