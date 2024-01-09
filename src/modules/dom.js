import ops from "./ops";

export default function dom() {
  // let weather;

  const updateCurrent = (data) => {
    const weather = data;
    console.log(weather);
  };
  const updateForecast = (data) => {
    const weather = data;
    console.log(weather);
  };

  return { updateCurrent, updateForecast };
}
