function foramtDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Noveber",
    "December",
  ];
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let currentDate = now.getDate();
  let timeHour = now.getHours();
  if (timeHour < 10) {
    timeHour = `0${timeHour}`;
  }
  let timeMin = now.getMinutes();
  if (timeMin < 10) {
    timeMin = `0${timeMin}`;
  }
  return `${day} ${timeHour}:${timeMin} (${month} ${currentDate})`;
}
let now = new Date();
let date = document.querySelector("#current-date");
date.innerHTML = foramtDate(date);
//
function showTemp(response) {
  console.log(response.data);
  document.querySelector(
    "#display-city"
  ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  document.querySelector("#current-temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind: ${response.data.wind.speed}km/h`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector(
    "#visibility"
  ).innerHTML = `Visibility: ${response.data.weather[0].description}`;
  let dateSunset = new Date(response.data.sys.sunset * 1e3);
  localised = dateSunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#hour-sunset").innerHTML = `${localised}`;
  let dateSunrise = new Date(response.data.sys.sunrise * 1e3);
  localised = dateSunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#hour-sunrise").innerHTML = `${localised}`;
}

function search(city) {
  let apiKey = `0b72be15629b34cd08cec539aec6e195`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  search(city);
}
function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `0b72be15629b34cd08cec539aec6e195`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", handleSubmit);
search("Seattle");

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getLocation);

//
