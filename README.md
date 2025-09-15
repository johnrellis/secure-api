# secure api.

A very secure (eventually) API.

## Getting started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm start
```

Note: you will need a .env file with the following.

```plaintext
JWT_SECRET=this is a secret key
```

## API

### users

#### GET api/v1/users

Retrieves a list of users.

```bash
curl localhost:3000/api/v1/users/4 -H "Authorization: Bearer: `node scripts/create-jwt.mjs`"
```

Response:

```json
{
  "id": 4,
  "name": "Alice"
}
```

### token

Creates a token for a valid user.

#### POST api/v1/token

```bash
curl -X POST http://localhost:3000/api/v1/token \
-H "Content-Type: application/json" -d '{"name":"john"}'
```

Response:

```json
{
  "token": "eyJhbG....."
}

