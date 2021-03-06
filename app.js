const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");

const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery")));
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")),
);
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/scss")),
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { list: ["MyLibrary", "b"] });
});

app.listen(port, () => {
  debug(`listening at  ${chalk.green(port)}`);
});
