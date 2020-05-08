import axios from "axios";

const citiesUrl = "http://autocomplete.travelpayouts.com/places2?";
const ticketsUrl = "http://min-prices.aviasales.ru/calendar_preload?";

const getCitiesByQuery = (query: string) =>
  axios.get(citiesUrl + `locale=ru&types[]=city&term=${query}`);

const getTicketsByQuery = (
  origin: string,
  destination: string,
  depart_date: string
) =>
  axios.get(
    ticketsUrl +
      `origin=${origin}&destination=${destination}&depart_date=${depart_date}&one_way=false`
  );

export default { getCitiesByQuery, getTicketsByQuery };
