// Webfont Loader
WebFont.load({
  google: {
    families: ["Inter", "Montserrat"],
  },
});

const banner = document.getElementById("banner");
const closeBannerBtn = document.getElementById("closeBanner");

// Navbar Logic
const navBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("menu");
const lastvisit = document.getElementById("lastvisit");
function toggleMenu() {
  mobileMenu.classList.toggle("show-menu");
}

navBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Store alerts
let alerts;

function handleAlerts() {
  // Check for alerts
  if (alerts) {
    banner.classList.remove("hide");
    const p = document.createElement("p");
    p.textContent = alerts[0].description;
    banner.appendChild(p);
  } else {
    banner.classList.add("hide");
  }
}

handleAlerts();

closeBannerBtn.addEventListener("click", function () {
  banner.classList.add("hide");
});

// Last Modified Date
const currentDateSpan = document.getElementById("currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

const store = localStorage.getItem("lastvisit");
console.log("store: ", store);
if (!store) {
  lastvisit.textContent = "Welcome! Let us know if you have any questions.";
  localStorage.setItem("lastvisit", now.getDate());
} else if (now.getDate() - localStorage.getItem("lastvisit") < 86400000) {
  lastvisit.textContent = "Back so soon! Awesome!";
  localStorage.setItem("lastvisit", now.getDate());
} else {
  astvisit.textContent = "You last visited n days ago.";
  localStorage.setItem("lastvisit", now.getDate());
}
