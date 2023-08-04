# Run Locally

1. To Do List

```bash
  git clone https://github.com/Code-Platoon-Curriculum/full-stack-exercise.git
```

2. Change directory into the `back_end` directory to begin running your Django Server.

3. Create and activate a Virtual Environment

```bash
python -m venv .venv
source .venv/bin/activate
```

4. Install dependencies from `requirements.txt`

```bash
pip install requirements.txt
```

5. Create a database named `todo_db`

```bash
createdb todo_db
```

6. Migrate migration files

```bash
python manage.py migrate
```

7. Run the Django server

```bash
python manage.py runserver
```

8. Open a separate terminal to run the Vite Development server

9. Change directories into `front_end`

10. Install dependencies from `package.json`

```bash
  npm install
```

11. Run the Vite server

```bash
  npm run dev
```
