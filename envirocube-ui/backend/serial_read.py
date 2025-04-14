import serial
import requests
import time

# Replace 'COM3' with your port (e.g., '/dev/ttyACM0' on macOS/Linux)
arduino_port = '/dev/tty.usbmodem21401'
baud_rate = 115200

# Open serial connection
ser = serial.Serial(arduino_port, baud_rate, timeout=1)

# Allow time for the connection to be established
time.sleep(2)

# Flask server address
# flask_url = 'http://128.61.71.233:5000/api/sensor'
flask_url = 'http://127.0.0.1:5000/api/sensor'

print("Streaming data to Flask server...")

print("Connected to Arduino. Reading data...")

try:
    while True:
        timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
        temp = ser.readline().decode('utf-8').strip()
        humidity = ser.readline().decode('utf-8').strip()
        iaq = ser.readline().decode('utf-8').strip()
 
        if temp and humidity and iaq:
            print(timestamp, temp, humidity, iaq)
            try:
                response = requests.post(flask_url, json={'temperature' : temp, 'humidity': humidity, 'iaq': iaq})
                print("Response:", response.status_code, response.text)
 
            except Exception as e:
                print("Failed to send data:", e)
 
except KeyboardInterrupt:
    print("Exiting...")
finally:
    ser.close()
