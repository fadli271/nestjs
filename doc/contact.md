# COntact API Spec

### Create Contact
Endpoint: POST /api/constacts

Headers:
- Authorization: token

Request Body:
```json
{
    "first_name": "Fadli",
    "last_name": "Simin",
    "email": "fadli.simin@gmail.com",
    "phone": "0822123123"
}
```

Response Body (success):
```json
{
    "data": {
        "id": 1,
        "first_name": "Fadli",
        "last_name": "Simin",
        "email": "fadli.simin@gmail.com",
        "phone": "0822123123"
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Contact not created"
}
```

### Get Contact
Endpoint: GET /api/constacts/:contactId

Headers:
- Authorization: token

Response Body (success):
```json
{
    "data": {
        "id": 1,
        "first_name": "Fadli",
        "last_name": "Simin",
        "email": "fadli.simin@gmail.com",
        "phone": "0822123123"
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Contact not found"
}
```

### Update Contact
Endpoint: put /api/constacts/:contactId

Headers:
- Authorization: token

Request Body:
```json
{
    "first_name": "Fadli",
    "last_name": "Simin",
    "email": "fadli.simin@gmail.com",
    "phone": "0822123123"
}
```

Response Body (success):
```json
{
    "data": {
        "id": 1,
        "first_name": "Fadli",
        "last_name": "Simin",
        "email": "fadli.simin@gmail.com",
        "phone": "0822123123"
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Contact not created"
}
```


### Remove Contact
Endpoint: DELETE /api/constacts/:contactId

Headers:
- Authorization: token

Response Body (success):
```json
{
    "message": "Contact deleted"
}
```

### Search Contact
Endpoint: GET /api/constacts

Headers:
- Authorization: token

Query Params:
- name: string, contact first name or last name, optional
- email: string, contact email, optional
- phone: string, contact phone, optional
- page: number, default 1
- size: number, default 10

Response Body (success):
```json
{
    "data": [
        {
            "id": 1,
            "first_name": "Fadli",
            "last_name": "Simin",
            "email": "fadli.simin@gmail.com",
            "phone": "0822123123"
        },
        {
            "id": 2,
            "first_name": "Fadli",
            "last_name": "Simin",
            "email": "fadli.simin@gmail.com",
            "phone": "0822123123"
        }
    ],
    "paging": {
        "current_page": 1,
        "total_page": 10,
        "size": 10
    }
}
```

Response Body (Failed):
```json
{
    "errors": "Contact not Found"
}
```
