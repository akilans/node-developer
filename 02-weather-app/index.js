const request = require("request");
city = encodeURIComponent(process.argv[2]);

const getWeather =
  (city,
  () => {
    const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        console.log("Error : " + error);
      } else {
        let woeid = response.body[0].woeid;
        console.log(woeid);
        getDetails(woeid, (error, response) => {
          if (response) {
            const city_name = response.body.title;
            console.log(response.body);
            response.body.consolidated_weather.forEach((weather) => {
              console.log(
                `${city_name} - ${weather.applicable_date} - ${weather.the_temp} ${weather.weather_state_name}`
              );
            });
          } else {
            console.log(error);
          }
        });
      }
    });
  });

const getDetails = (woeid, callback) => {
  const url = `https://www.metaweather.com/api/location/${woeid}`;
  console.log(url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Error Happened while getting weather report", undefined);
    } else {
      callback(undefined, response);
    }
  });
};

if (process.argv[2]) {
  console.log(process.argv[2]);
  city = encodeURIComponent(process.argv[2]);
  console.log(city);
  getWeather(city);
} else {
  console.log("Please enter city name");
}
