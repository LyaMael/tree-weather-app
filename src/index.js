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
