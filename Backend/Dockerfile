FROM python:3.9-alpine

WORKDIR /data

COPY . .

RUN pip3 install -r requirement.txt

EXPOSE 5000

ENTRYPOINT gunicorn -w 3 -b 0.0.0.0:5000 main:app