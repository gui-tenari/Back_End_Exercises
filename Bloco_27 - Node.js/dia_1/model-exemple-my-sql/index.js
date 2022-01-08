const express = require('express');
const bodyParser = require('body-parser');
const Authors = require('./models/author');
const Books = require('./models/books');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();
  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);

  res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
  const newAuthor = req.body;
  const schemaValidade = Authors.schema;
  if (schemaValidade.validate(newAuthor)) {
    await Authors.create(newAuthor);
    res.status(200).json({ message: 'autor criado com sucesso' });
  }
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  const validation = await Books.validateAuthor(authorId);
  if (validation) {
    await Books.create(title, authorId);
    return res.status(201).json({ message: 'Livro criado com sucesso!' });
  }
  return res.status(400).json({ message: 'Dados inválidos' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
