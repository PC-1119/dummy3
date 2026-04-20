# checking

FROM 1234567809.dkr.ecr.us-east-1.amazonaws.com/base-images/pythonbaseimage:1.1.53

RUN apt-get update && apt-get install -y curl wget && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

CMD ["python", "app.py"]
