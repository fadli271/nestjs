# User API Spec

### Register user
Endpoint: POST /api/users

Request Body:
```json
{
    "username": "fadli",
    "password": "rahasia",
    "name": "fadli"
}
```

Response Body (success):
```json
{
    "data": {
        "username": "fadli",
        "name": "fadli",
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Username already registered"
}
```

### Login user

Endpoint: POST /api/users/login

Request Body:
```json
    "username": "fadli",
    "password": "rahasia"
```

Response Body (success):
```json
{
    "data": {
        "username": "fadli",
        "name": "fadli",
        "token": "session_id_generated"
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Username or password is wrong"
}
```

### Get user


Endpoint: GET /api/users/current
Headers:
- Authorization: token

Response Body (success):
```json
{
    "data": {
        "username": "fadli",
        "name": "fadli",
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Unauthorized"
}
```

### Update user
Endpoint: PATCH /api/users/current
Headers:
- Authorization: token

Request Body:
```json
{
    "password": "rahasia", // Optional
    "name": "fadli" // Optional
}
```

Response Body (success):
```json
{
    "data": {
        "username": "fadli",
        "name": "fadli",
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Username already registered"
}
```

### Logout user

Endpoint: DELETE /api/users/current
Headers:
- Authorization: token

Response Body (success):
```json
{
    "data": true
}
```