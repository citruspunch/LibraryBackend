# Library API

This is a backend API to manage a library's book collection. It supports CRUD operations (Create, Read, Update, Delete) on books.

## Endpoints

- `GET /books`: Retrieve a list of all books.
- `GET /books/:id`: Retrieve detailed information for a specific book.
- `POST /books`: Add a new book. Requires `title`, `author`, and `genre` fields.
- `PUT /books/:id`: Update an existing book’s details. Requires `title`, `author`, and `genre` fields.
- `DELETE /books/:id`: Remove a book from the collection.

## Running the Server

1. Navigate to the `library-api` directory.
2. Install dependencies: `npm install`
3.1. Start the server: `npm start`
3.2. For development with hot-reloading: `npm run dev`

## Example Requests (using Postman)

### 1. Retrieve a List of All Books

- **Method**: GET
- **URL**: `http://localhost:3000/books`

**Expected Response**:
```json
[
  {
    "id": 1,
    "title": "Example",
    "author": "Andres Tobar",
    "genre": "Fiction"
  }
]
```

### 2. Add a New Book

- **Method**: POST
- **URL**: `http://localhost:3000/books`
- **Body**:
```json
{
  "title": "New Book Title",
  "author": "New Author",
  "genre": "New Genre"
}
```

**Expected Response**:
```json
{
  "id": 2,
  "title": "New Book Title",
  "author": "New Author",
  "genre": "New Genre"
}
```

### 3. Update an Existing Book

- **Method**: PUT
- **URL**: `http://localhost:3000/books/1`
- **Body**:
```json
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "genre": "Updated Genre"
}
```

**Expected Response**:
```json
{
  "id": 1,
  "title": "Updated Book Title",
  "author": "Updated Author",
  "genre": "Updated Genre"
}
```

### 4. Delete a Book

- **Method**: DELETE
- **URL**: `http://localhost:3000/books/1`

**Expected Response**:
```json
{
  "message": "Book deleted successfully"
}
```

### CodeSandbox Link
https://codesandbox.io/p/github/citruspunch/LibraryBackend/main?import=true

### Postman Collection
https://winter-escape-9335.postman.co/workspace/Team-Workspace~c02857ee-a8fe-4b43-8bd1-c7fad2ee5c30/collection/43151460-395709ed-5777-4ab8-97c3-f5a652e501ea?action=share&creator=43151460