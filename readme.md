# One Api Development

## Description
A simple blog post API built with Express.js. Supports creating and retrieving blog posts.

## How to Run
1. Clone or download the project.
2. Run `npm install express` to install dependencies.
3. Start the server: `node app.js`


## API Endpoints

### 1. Create a New Blog Post

**Endpoint:** `POST /blog-posts`

Creates a new blog post with the provided details.

#### Request
- **Headers:**
    - `Content-Type: application/json`

- **Body:**
```json
{
    "title": "title3",
    "content": "third content",
    "author": "author3"
}
```
- **Response: 201 Created**
```json
{
    "message": "Blog post created successfully",
    "post": {
        "id": 3,
        "title": "title3",
        "content": "third content",
        "author": "author3",
        "createdAt": "2025-04-12T17:10:28.551Z"
    }
}
```
- **Response: 400 Bad Request**
```json
{
  "error": "Title must be at least 3 characters long."
}
```

### 2. Get All Blog Post

**Endpoint:** `GET /blog-posts`

Fetch All Blog Posts

#### Request
- **Headers:**
    - `Content-Type: application/json`


- **Response:**
```json
[
    {
        "id": 1,
        "title": "title1",
        "content": "this is my first content",
        "author": "author1",
        "createdAt": "2025-04-12T17:01:43.605Z"
    },
    {
        "id": 2,
        "title": "title2",
        "content": "second content",
        "author": "author2",
        "createdAt": "2025-04-12T17:01:49.823Z"
    },
    {
        "id": 3,
        "title": "title3",
        "content": "third content",
        "author": "author3",
        "createdAt": "2025-04-12T17:10:28.551Z"
    }
]
```



### 3. Get Single Blog Post

**Endpoint:** `GET /blog-posts/:id`

Fetch All Blog Posts

#### Request
- **Headers:**
    - `Content-Type: application/json`


- **Response: 200 OK**
```json

    {
        "id": 3,
        "title": "title3",
        "content": "third content",
        "author": "author3",
        "createdAt": "2025-04-12T17:10:28.551Z"
    }

```

- **Response: 404 Not Found:**
```json
{
    "error": "Blog post with ID 4 not found"
}
```