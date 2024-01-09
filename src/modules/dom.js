import ops from "./ops";

export default function dom() {
  let weather;
  let isCelsius = true;

  const updateWeatherData = (data) => {
    weather = data;
    console.log(weather);
    updateCurrent();
    updateForecast();
  };

  const weatherIcon = document.querySelector(".weather-icon");
  const location = document.querySelector(".location");
  const temperature = document.querySelector(".temperature");
  const updateCurrent = () => {
    weatherIcon.src = weather.current.condition.icon;
    location.innerText = `${weather.location.name}, ${weather.location.region}, ${weather.location.country}`;
    const deg = isCelsius ? weather.current.temp_c : weather.current.temp_f;
    temperature.innerText = `${deg}°`;
  };

  const fcDay1 = document.querySelector("#fc-day1");
  const fcTemp1 = document.querySelector("#fc-temp1");
  const fcIcon1 = document.querySelector("#fc-icon1");
  const fcDay2 = document.querySelector("#fc-day2");
  const fcTemp2 = document.querySelector("#fc-temp2");
  const fcIcon2 = document.querySelector("#fc-icon2");
  const fcDay3 = document.querySelector("#fc-day3");
  const fcTemp3 = document.querySelector("#fc-temp3");
  const fcIcon3 = document.querySelector("#fc-icon3");
  const fcDayArray = [fcDay1, fcDay2, fcDay3];
  const fcTempArray = [fcTemp1, fcTemp2, fcTemp3];
  const fcIconArray = [fcIcon1, fcIcon2, fcIcon3];

  const updateForecast = () => {
    const fcData = weather.forecast.forecastday;

    fcDayArray.forEach(
      (day, i) => (day.innerText = ops().getNameOfDay(fcData[i + 1].date))
    );

    fcTempArray.forEach((temp, i) => {
      const deg = isCelsius
        ? fcData[i + 1].day.avgtemp_c
        : fcData[i + 1].day.avgtemp_f;
      temp.innerText = `${deg}°`;
    });

    fcIconArray.forEach((icon, i) => {
      icon.src = fcData[i + 1].day.condition.icon;
    });
  };

  return { updateWeatherData };
}
