import "./style.css";
import ops from "./modules/ops";
import dom from "./modules/dom";

const submitLocation = (e) => {
  e.preventDefault();
  const loc = document.querySelector("#search");
  dom().updateWeather(loc.value);
};

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => submitLocation(e));
