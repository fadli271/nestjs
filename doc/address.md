# Address API Spec

### Create Address

Endpoint: POST /api/contacts/:contactId/addresses

Headers:
- Authorization: Token

Request Body:

```json
{
    "street": "Jalan",
    "city": "kota",
    "province": "provinsi",
    "country": "negara",
    "postal_code": "123123"
}
```

Response Body:

```json
{
    "data":  {
        "id": 1
        "street": "Jalan",
        "city": "kota",
        "province": "provinsi",
        "country": "negara",
        "postal_code": "123123"
    }
}
```

### Get Addreess

Endpoint: GET /api/contacts/:contactId/addresses/addressId

Headers:
- Authorization: Token

Response Body:

```json
{
    "data":  {
        "id": 1
        "street": "Jalan",
        "city": "kota",
        "province": "provinsi",
        "country": "negara",
        "postal_code": "123123"
    }
}
```

### Update Address

Endpoint: PUT /api/contacts/:contactId/addresses/:AddressId

Headers:
- Authorization: Token

Request Body:

```json
{
    "street": "Jalan",
    "city": "kota",
    "province": "provinsi",
    "country": "negara",
    "postal_code": "123123"
}
```

Response Body:

```json
{
    "data":  {
        "id": 1
        "street": "Jalan",
        "city": "kota",
        "province": "provinsi",
        "country": "negara",
        "postal_code": "123123"
    }
}
```

### Remove Address

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization: Token

Response Body:

```json
{
    "data":  true
}
```

### List Adreesses

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization: Token

Response Body:

```json
{
    "data":  [
        {
            "id": 1
            "street": "Jalan",
            "city": "kota",
            "province": "provinsi",
            "country": "negara",
            "postal_code": "123123"
        },
            {
            "id": 2
            "street": "Jalan",
            "city": "kota",
            "province": "provinsi",
            "country": "negara",
            "postal_code": "123123"
        },
    ]
}
```