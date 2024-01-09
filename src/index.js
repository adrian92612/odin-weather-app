import "./style.css";
import ops from "./modules/ops";
import dom from "./modules/dom";

const submitLocation = (e) => {
  e.preventDefault();
  const loc = document.querySelector("#search");
  ops().getWeather(loc.value);
  e.target.reset();
};

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => submitLocation(e));

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=manila&appid=1c81eff6a61dd60b64f545a65fa75f29"
// )
//   .then((data) => data.json())
//   .then((data) => console.log(data));
