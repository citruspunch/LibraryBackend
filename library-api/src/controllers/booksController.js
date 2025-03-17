let books = [];

export const getAllBooks = (req, res) => {
  res.json(books);
};

export const getBookById = (req, res, next) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

export const addBook = (req, res) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newBook = { id: books.length + 1, title, author, genre };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
  const { title, author, genre } = req.body;
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  if (!title || !author || !genre) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  book.title = title;
  book.author = author;
  book.genre = genre;
  res.json(book);
};

