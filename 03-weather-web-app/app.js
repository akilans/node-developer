const express = require("express");
const hbs = require("hbs");
const path = require("path");
const weather = require("./utils/main");

const port = process.env.PORT || 3000;

const app = express();
app.set("view engine", "hbs");
// changing to templates
const public_html = path.join(__dirname, "./public");
app.use(express.static(public_html));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather Application"
  });
});

app.get("/weather/:city_name", (req, res) => {
  let city_name = req.params.city_name;
  console.log(city_name);

  weather.getCityID(city_name, (error, woeid) => {
    if (error) {
      res.json({
        error: error
      })
    } else {
      weather.getDetails(woeid, (error, response) => {
        if (error) {
          res.json({
            error: error
          })
        }else{
          res.json({
            report: response.body.consolidated_weather
          })
        }
          
      });
    }
  });

  
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
