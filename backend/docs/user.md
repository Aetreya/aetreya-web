# User API Spec

## Register

Endpoint: POST /api/users

Request Body:

```json
{
    "username": "data",
    "password": "data",
    "first_name": "data",
    "last_name": "data"
}
```

Response Body Success:

```json
{
    "data": {
        "username": "data",
        "first_name": "data",
        "last_name": "data"
    }
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Login

Endpoint: POST /api/users/login

Request Body:

```json
{
    "username": "data",
    "password": "data"
}
```

Response Body Success:

```json
{
    "data": {
        "token": "unique-token"
    }
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Get User

Endpoint: GET /api/users/current

Headers:

-   Authorization: token

Response Body Success:

```json
{
    "data": {
        "username": "data",
        "first_name": "data",
        "last_name": "data",
        "email": "data",
        "phone": "0812"
    }
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Update

Endpoint: PATCH /api/users/current

Headers:

-   Authorization: token

Request Body:

```json
{
    "password": "new data", //optional
    "first_name": "new data", //optional
    "last_name": "new data", //optional
    "email": "new data", //optional
    "phone": "new data" //optional
}
```

Response Body Success:

```json
{
    "username": "data",
    "first_name": "updated data"
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Logout

Endpoint: DELETE /api/users/logout

Headers:

-   Authorization: token

Response Body Success:

```json
{
    "data": "OK"
}
```

Response Body Errors:

```json
{
    "errors": "error message"
}
```
