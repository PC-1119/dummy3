# checking

FROM public.ecr.aws/e8c3u3r1/pythonbaseimage:v1.0.124

RUN apt-get update && apt-get install -y curl wget && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

CMD ["python", "app.py"]
