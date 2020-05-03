// const proxy = "https://cors-anywhere.herokuapp.com/";
const getCitiesByQuery = (query) => {
  return fetch(
    `http://autocomplete.travelpayouts.com/places2?locale=ru&types[]=city&term=${query}`
  );
};

const API_KEY = "3a991b8b114332885c02863c3bf23351";

const getTickets = (origin, destination, depart_date) => {
  return fetch(
    `http://min-prices.aviasales.ru/calendar_preload?origin=${origin}&destination=${destination}&depart_date=${depart_date}&one_way=false`
  );
};

export { getCitiesByQuery, getTickets };
