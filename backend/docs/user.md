# User API Spec

## Register

Endpoint: POST /api/users

Request Body:

```json
{
    "username": "data",
    "password": "data",
    "name": "data"
}
```

Response Body Success:

```json
{
    "data": "Ok"
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Login

Endpoint: POST /api/auth/login

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
        "token": "unique-token",
        "expiredAt": 333 // milliseconds
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

Request Headers:

-   X-API-TOKEN : token (Mandatory)

Response Body Success:

```json
{
    "data": {
        "username": "data",
        "name": "data",
        "role": "data"
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

Request Headers:

-   X-API-TOKEN : token (Mandatory)

Request Body:

```json
{
    "password": "new data", //optional
    "name": "new name" //optional
}
```

Response Body Success:

```json
{
    "username": "updated data",
    "name": "updated data",
    "role": "role"
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Logout

Endpoint: DELETE /api/auth/logout

Request Headers:

-   X-API-TOKEN : token (Mandatory)

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
