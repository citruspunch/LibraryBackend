let books = [];

export const getAllBooks = (req, res) => {
  res.json(books);
};

export const getBookById = (req, res, next) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

