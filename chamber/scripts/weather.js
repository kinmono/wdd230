// Get Current Weather
async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=6.632192667531344&lon=3.3806072978815394&appid=7a24f23ff0f6ddd9ae6572431e5df1b0&units=imperial"
  );
  const data = await res.json();
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  document.getElementById("desc").textContent = desc;
  document.getElementById("temp").textContent = temp + "\xB0F";

  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("windSpeed").textContent = data.wind.speed;
}

getWeather();

const requestUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=6.632192667531344&lon=3.3806072978815394&appid=7a24f23ff0f6ddd9ae6572431e5df1b0&units=imperial";

fetch(requestUrl)
  .then((response) => response.json())
  .then((jsonObject) => {
    const dailyForecast = jsonObject.list.slice(1, 4);
    // Update only Homepage
    console.log("dailllly: ", dailyForecast);
    // Weather Forecast
    const d = new Date();

    const todayDayNumber = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let forecastDayNumber = todayDayNumber;

    dailyForecast.forEach((weather) => {
      forecastDayNumber += 1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
      const forecastItem = document.createElement("div");
      forecastItem.classList = "forecast-item";
      const dayName = document.createElement("h4");
      dayName.textContent = weekday[forecastDayNumber];

      const iconPath =
        "https://openweathermap.org/img/wn/" +
        weather.weather[0].icon +
        "@2x.png";
      const icon = document.createElement("img");
      icon.src = iconPath;
      icon.alt = weather.weather[0].description;

      const temp = document.createElement("p");
      temp.textContent = weather.main.temp + "\xB0F";

      forecastItem.appendChild(dayName);
      forecastItem.appendChild(icon);
      forecastItem.appendChild(temp);

      console.log("forcast: ", forecastItem);
      document.querySelector(".forecast-box").appendChild(forecastItem);
    });
  });
