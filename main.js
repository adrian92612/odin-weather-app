const updateCurrent = () => {};

const updateForecas = () => {};

const getWeather = async (location) => {
  try {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=02f4480fe9244812998133825240401&q=${location}`
    );
    if (weatherData.status == 200) {
      const data = await weatherData.json();
      const text = data.current.condition.text;
      const feelsLike = data.current.feelslike_c;
      const temp = data.current.temp_c;
      const precipitation = data.current.precip_mm;
      const gust = data.current.gust_kph;
      const wind = data.current.wind_kph;
    }
  } catch (err) {
    alert(err);
  }
};

getWeather("manila");
