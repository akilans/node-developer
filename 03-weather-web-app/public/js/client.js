const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit",(event) =>{
    event.preventDefault();
    document.getElementById("weather_error").style = "display:none";
    document.getElementById("weather_report_table").style = "display:none";
    let playAudio = document.getElementById("rainAudio");
    playAudio.pause();
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "url('/images/sky.jpg')";

    let city_name = document.getElementById("city").value;

    if (city_name.trim().length == 0){
      document.getElementById("weather_error").innerHTML = "Please enter city name";
      document.getElementById("weather_error").style = "display:block";
    }else{
      fetch(`/weather/${city_name}`).then((response) =>{
        return response.json();
      }).then((data) =>{
        if (data.error != undefined) {
          document.getElementById("weather_error").innerHTML = data.error;
          document.getElementById("weather_error").style = "display:block";
        }else{
          let table_rows = "";
          let heavyRain = false;

          data.report.forEach((weather,index) => {

            if (weather.weather_state_name == "Heavy Rain") {
              heavyRain = true;
            }

            table_rows += `<tr>
            <th scope="col">${index+1}</th>
            <td>${weather.applicable_date}</td>
            <td>${weather.the_temp.toFixed(2)}</td>
            <td>${weather.weather_state_name}</td>
            </tr>`
          });

          document.getElementById("weather_data").innerHTML = table_rows;
          document.getElementById("weather_report_table").style = "display:table";

          if (heavyRain) {
            playAudio.play();
            document.body.style.backgroundImage = "url('/images/rain.jpg')";
          }
        }
      })
    }



    


})


// Get City ID
const getCityID = (city, callback) => {
    const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
    fetch(url).then((response) =>{
        console.log(response)
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

  


