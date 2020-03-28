import key from "../secret/weatherkey";

// const getDataByCoords = async (lat, lon) => {
//   const result = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
//   );

//   if (result.status === 200) {
//     const data = await result.json();
//     return data;
//   } else {
//     return {};
//   }
// };

const getDataByCoords = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
};

export { getDataByCoords };
