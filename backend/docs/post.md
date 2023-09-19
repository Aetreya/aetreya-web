# Post API Spec

## Create

Endpoint: POST /api/posts

Headers: 
- Authorization: token

Request Body:

```json
{
    "title": "data",
    "body": "data",
    "username": "data",
}
```

Response Body Success:

```json
{
    "data": {
        "id": 1,
        "title": "data",
        "body": "data",
        "username": "data",
    },
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Get Single Post

Endpoint: GET /api/posts/:id

Response Body Success:

```json
{
    "data": {
        "id": 1,
        "title": "data",
        "body": "data",
        "username": "data",
    },
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Get All Post

Endpoint: GET /api/posts/

Response Body Success:

```json
{
    "data": [
    {
        "id": 1,
        "title": "data",
        "body": "data",
        "username": "data",
    },
    {
        "id": 2,
        "title": "data",
        "body": "data",
        "username": "data",
    }]
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Update

Endpoint: PUT /api/posts/:id

Headers: 
- Authorization: token

Request Body:

```json
{
    "id": 1,
    "title": "data",
    "body": "data",
}
```

Response Body Success:

```json
{
    "data": {
        "id": 1,
        "title": "data",
        "body": "data",
        "username": "data",
    },
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Delete

Endpoint: DELETE /api/posts/:id

Response Body Success:

```json
{
    "data": "OK"
}
```

Response Body Error:

```json
{
    "errors": "Post tidak ditemukan"
}
```