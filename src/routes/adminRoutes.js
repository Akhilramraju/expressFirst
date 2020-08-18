const express = require("express");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:adminRoutes");


const adminRouter = express.Router();
const books = [{
  title: "By Tom",
  genre: "Music Genre",
  author: "Tom",
  read: false

}];

function router(nav) {
  adminRouter.route("/")
    .get((req, res) => {
      const url = "mongodb://localhost:27017";
      const dbName = "ArtApp";

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug("Conected to server");
          const db = client.db(dbName);
          const response = await db.collection("books").insertMany(books);
          res.json(response);
        }
        catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return adminRouter;
}
module.exports = router;
