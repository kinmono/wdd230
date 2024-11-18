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
