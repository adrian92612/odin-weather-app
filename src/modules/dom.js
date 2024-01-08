import ops from "./ops";

export default function dom() {
  const updateWeather = async (location) => {
    try {
      const weather = await ops().getWeather(location);
    } catch (err) {
      console.log("asdf");
    }
  };

  return { updateWeather };
}
