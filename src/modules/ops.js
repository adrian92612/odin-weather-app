import dom from "./dom";

export default function ops() {
  const apiKey = "02f4480fe9244812998133825240401";
  const getWeather = async (location) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
      );
      if (response.status != 200) throw new Error("null");
      const data = await response.json();
      dom().updateWeatherData(data);
    } catch (err) {
      alert(err);
    }
  };

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getNameOfDay = (date) => {
    const day = new Date(date);
    return dayNames[day.getDay()];
  };

  const registerEvents = () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const loc = document.querySelector("#search");
      getWeather(loc.value);
      form.reset();
    });

    const tempScaleBtn = document.querySelector("#temp-scale");
    tempScaleBtn.addEventListener("click", dom().changeTempUnit);
  };

  return { getWeather, getNameOfDay, registerEvents };
}
