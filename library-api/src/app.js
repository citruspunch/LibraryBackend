const express = require('express');
const booksRoutes = require('./routes/booksRoutes');

const app = express();

app.use(express.json());
app.use('/books', booksRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;