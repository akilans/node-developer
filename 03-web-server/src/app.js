const path = require("path");
const express = require("express");

const app = express();

// by default it looks for views folder
// changing to templates
const public_html = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(public_html));

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

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
