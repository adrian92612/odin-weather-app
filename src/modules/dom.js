import ops from "./ops";

export default function dom() {
  let weather;
  let isCelsius = true;
  const weatherIcon = document.querySelector(".weather-icon");
  const location = document.querySelector(".location");
  const temperature = document.querySelector(".temperature");

  const updateWeatherData = (data) => {
    weather = data;
    console.log(weather);
    updateCurrent();
  };

  const updateCurrent = () => {
    weatherIcon.src = weather.current.condition.icon;
    location.innerText = `${weather.location.name}, ${weather.location.region}, ${weather.location.country}`;
    const deg = isCelsius ? weather.current.temp_c : weather.current.temp_f;
    temperature.innerText = `${deg}°`;
  };

  const updateForecast = () => {
    const weather = data;
  };

  return { updateWeatherData };
}
