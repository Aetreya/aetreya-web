# Comment API Spec

## Create

Endpoint: POST /api/posts/:postId/comments

Headers: 
- Authorization: token

Request Body:

```json
{
    "id": 1,
    "body": "data",
    "username": "data",
    "post_id": 1
}
```

Response Body Success:

```json
{
    "data": {
        "id": 1,
        "body": "data",
        "username": "data",
        "post_id": 1
    },
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```


## Get All Comments By Post Id

Endpoint: GET /api/posts/:postId/comments

Response Body Success:

```json
{
    "data": [
    {
        "id": 1,
        "body": "data",
        "username": "data",
        "post_id": 1,
    },
    {
        "id": 2,
        "body": "data",
        "username": "data",
        "post_id": 1,
    }]
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Update Comment

Endpoint: PUT /api/posts/:postId/comments/:commentId

Headers: 
- Authorization: token

Request Body:

```json
{
    "body": "data",
}
```

Response Body Success:

```json
{
    "data": {
        "id": 1,
        "body": "data",
        "username": "data",
        "post_id": 1
    },
}
```

Response Body Error:

```json
{
    "errors": "error message"
}
```

## Delete Comment

Endpoint: DELETE /api/posts/:postId/comments/:commentId

Response Body Success:

```json
{
    "data": "OK"
}
```

Response Body Error:

```json
{
    "errors": "Komentar tidak ditemukan"
}
```