const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.get("/api20083341/books", async (req, res) => {
  console.info(`Getting all books`);

  const books = await query("SELECT * FROM tblbookIUH20083341 ");
  res.json(books);
});

app.listen(80, () => {
  console.info(`Server started listening on port 80`);
});
