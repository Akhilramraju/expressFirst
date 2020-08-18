const express = require("express");

const bookRouter = express.Router();

function router(nav) {
  const books = [{
    title: "By Tom",
    genre: "Music Genre",
    author: "Tom",
    read: false

  }];

  bookRouter.route("/")
    .get((req, res) => {
      res.render("bookListView", {
        nav,
        title: "Books",
        books
      });
    });

  bookRouter.route("/:id")
    .get((req, res) => {
      const { id } = req.params;
      res.render("bookView", {
        nav,
        title: "Books",
        book: books[id]
      });
      res.send("Hello Single Books");
    });
  return bookRouter;
}

module.exports = router;
