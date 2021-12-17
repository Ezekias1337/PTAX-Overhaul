const express = require("express");
const mongoose = require("mongoose");
const { render } = require("ejs");
const dbURI = require("./dbURI")

const app = express();

mongoose
  .connect(dbURI.dbURI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware & static files
app.use(express.static("./images"));
app.use(express.static("./css"));
app.use(express.static("./node_modules"));
app.use(express.static("./public"));
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.get("/login", (req, res) => {
  res.render("login.ejs")
})

app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs")
})

app.get("/about", (req, res) => {
  res.render("about.ejs")
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs")
})