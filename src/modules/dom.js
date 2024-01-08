import ops from "./ops";

export default function dom() {
  let weather;
  const updateWeather = async (location) => {
    try {
      weather = await ops().getWeather(location);
      console.log(weather);
    } catch (err) {
      console.log(err);
    }
  };

  return { updateWeather };
}
