# Server

## Development

**Note:** _Before starting, make sure you have installed [Python 3.11](https://www.python.org/downloads/)._

Firstly, you need to clone this GIT repository:

```shell
git clone https://github.com/CrazyProger1/TestTask-1
```

Then, change directory to server:

```shell
cd server
```

Install the requirements:

```shell
pip install -r requirements/base.txt
```

Make migrations:

```shell
python ./manage.py migrate
```

And finally you can run the server:

```shell
python ./manage.py runserver
```

