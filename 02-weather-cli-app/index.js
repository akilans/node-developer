const request = require("request");
const chalk = require("chalk");
// Get City ID
const getCityID = (city, callback) => {
  const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Error : " + error);
    } else {
      if (response.body.length > 0) {
        let woeid = response.body[0].woeid;
        callback(undefined, woeid);
      } else {
        callback(`${city} - not found`, undefined);
      }
    }
  });
};

// Get weather data by passing city id
const getDetails = (woeid, callback) => {
  const url = `https://www.metaweather.com/api/location/${woeid}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(
        chalk.red("Error Happened while getting weather report"),
        undefined
      );
    } else {
      callback(undefined, response);
    }
  });
};

// Get weather report for a passing city
if (process.argv[2]) {
  let city_name = process.argv[2];
  city = encodeURIComponent(city_name);
  getCityID(city, (error, woeid) => {
    if (error) {
      console.log(chalk.red(error));
    } else {
      getDetails(woeid, (error, response) => {
        console.log(chalk.yellow("CITY_NAME - DATE - TEMPARATURE - STATE"));
        response.body.consolidated_weather.forEach((weather, index) => {
          let color = index % 2 == 0 ? "green" : "blue";
          console.log(
            chalk[color](
              `${city_name} - ${
                weather.applicable_date
              } - ${weather.the_temp.toFixed(2)}° ${weather.weather_state_name}`
            )
          );
        });
      });
    }
  });
} else {
  console.log(chalk.red("Please enter city name"));
}
