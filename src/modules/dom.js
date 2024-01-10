import * as ops from "./ops";

let weather;
let isCelsius = true;

const updateWeatherData = (data) => {
  weather = data;
  updateCurrent();
  updateForecast();
};

const changeTempUnit = () => {
  isCelsius = !isCelsius;
  document.querySelector("#temp-scale").innerText = isCelsius
    ? `Celsius`
    : `Fahrenheit`;
  updateCurrent();
  updateForecast();
};

const updateCurrent = () => {
  const currentWeatherArray = [
    ...document.querySelector(".current-weather").children,
  ];
  // Weather Icon
  currentWeatherArray[0].src = weather.current.condition.icon;
  // Weather Description
  currentWeatherArray[1].innerText = weather.current.condition.text;
  // Location
  currentWeatherArray[2].innerText = `${weather.location.name}, ${weather.location.region}, ${weather.location.country}`;
  // Temperature
  currentWeatherArray[3].innerText = isCelsius
    ? `${weather.current.temp_c}°C`
    : `${weather.current.temp_f}°F`;
};

const updateForecast = () => {
  const fcData = weather.forecast.forecastday;
  const fcDivs = [...document.querySelectorAll(".forecast-cont")];

  fcDivs.forEach((div, i) => {
    const fcDivChild = [...div.children];
    // Name of Day
    fcDivChild[0].innerText = ops.getNameOfDay(fcData[i].date);
    // Average Temperature
    fcDivChild[1].innerText = isCelsius
      ? `${fcData[i].day.avgtemp_c}°C`
      : `${fcData[i].day.avgtemp_f}°F`;
    // Weather Icon
    fcDivChild[2].src = fcData[i].day.condition.icon;
  });
};

export { updateWeatherData, changeTempUnit };
