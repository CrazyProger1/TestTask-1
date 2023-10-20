
setlocal enabledelayedexpansion

call "venv\Scripts\activate"

py ./manage.py runserver

deactivate

exit /b