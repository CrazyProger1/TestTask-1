# Server

## Development

**Note:** _Before starting, make sure you have installed [Python 3.11](https://www.python.org/downloads/)._

- Firstly, you need to clone this GIT repository:

```shell
git clone https://github.com/CrazyProger1/TestTask-1
```

- Then, change directory to server:

```shell
cd server
```

- Install the requirements:

```shell
pip install -r requirements/base.txt
```

- Create and fulfill .env file following [example](.env.example).

- Make migrations:

```shell
python ./manage.py migrate
```

- And finally you can run the server:

```shell
python ./manage.py runserver
```

Now it's available on [page](http://127.0.0.1:8000/).

### Docker

Also, you have opportunity to run project via Docker.

**Note:** _Before starting, make sure you have [Docker](https://www.docker.com/) installed and running._

Firstly, build an image:

```shell
docker build -t test-task .
```

Then, you can run the server:

```shell
docker run -p 8000:8000 test-task
```

## Docs

To see the docs, run the server.

### API

Swagger docs: [page](http://127.0.0.1:8000/docs/swagger/).