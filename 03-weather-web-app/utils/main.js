const request = require("request");

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
      callback("Error Happened while getting weather report", undefined);
    } else {
      callback(undefined, response);
    }
  });
};

exports.getCityID = getCityID;
exports.getDetails = getDetails;
