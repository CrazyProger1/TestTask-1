FROM python:3.11

RUN mkdir /test_task

WORKDIR /test_task

COPY requirements/prod.txt .

RUN pip install -r prod.txt

COPY . .

EXPOSE 8000

CMD python manage.py migrate
CMD python manage.py runserver 0.0.0.0:8000