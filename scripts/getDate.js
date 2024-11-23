// Webfont Loader
WebFont.load({
  google: {
    families: ["Lato"],
  },
});

// Select elements from DOM
const currentYearEl = document.querySelector("#currentYear");
const lastUpdatedEl = document.querySelector("#lastUpdated span");
const visitEl = document.querySelector("#visit");

// Find current year
const now = new Date();
const currentYear = now.getFullYear();
const visit = localStorage.getItem("visit") || 0;
localStorage.setItem("visit", Number(visit) + 1);
visitEl.textContent = localStorage.getItem("visit");
// Update DOM element
currentYearEl.textContent = currentYear.toString();

// Find Last Update Time
const lastUpdate = new Date(document.lastModified);
const formattedlastUpdate = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "short",
  timeStyle: "medium",
}).format(lastUpdate);

// Update DOM element
lastUpdatedEl.textContent = formattedlastUpdate;

// Handle Responsive Menu
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener(
  "click",
  () => {
    menu.classList.toggle("show");
    menuBtn.classList.toggle("show");
  },
  false
);
async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=6.632192667531344&lon=3.3806072978815394&appid=7a24f23ff0f6ddd9ae6572431e5df1b0&units=imperial"
  );
  const data = await res.json();
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  // Update DOM
  document.getElementById("city").textContent = data.name;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${temp.toFixed(1)} °F`;
  document.getElementById("description").textContent = `Condition: ${desc}`;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById("weather-icon").alt = desc;
}

getWeather();
