FROM python:3.10-alpine

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY data/sample10k.json /code/data/

COPY main.py /code/

CMD ["fastapi", "run", "main.py", "--port", "80"]