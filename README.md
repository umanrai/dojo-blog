# Set Up

- env 

`cp .env.example .env`

Add the **REACT_APP_API_HOST** in the env file.

- db

`cp data/db.json.bhk data/db.json`

# Running

- client

`npm run start`

- server

`npx json-server --watch data/db.json --port 8000`

Use the server port and url to env variable **REACT_APP_API_HOST** 