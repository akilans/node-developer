const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// by default it looks for views folder
// changing to templates
const public_html = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(public_html));

hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Akilan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Akilan",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Akilan",
  });
});

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404-Page",
    msg: "Help article not found",
    name: "Akilan",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404-Page",
    msg: "404 not found",
    name: "Akilan",
  });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
