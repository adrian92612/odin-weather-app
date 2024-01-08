export default function ops() {
  const apiKey = "02f4480fe9244812998133825240401";

  const getWeather = async (location) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`
    );
    if (response.status != 200) throw new Error("null");
    return response.json();
  };

  return { getWeather };
}
