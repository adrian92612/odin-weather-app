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
