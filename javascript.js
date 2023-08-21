let now = new Date();
console.log(now);

let date = now.getDate();
console.log(date);
let mil = now.getMilliseconds();
console.log(mil);
let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sar"];
let day = days[now.getDay()];
console.log(day);
let year = now.getFullYear();
console.log(year);
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
console.log(month);
let currentDate = ` Today is ${day}, ${month} ${date}, ${year}`;
console.log(currentDate);

function formatDate() {
  return ` Today is ${day}, ${month} ${date}, ${year}`;
}
formatDate();
alert(formatDate());
