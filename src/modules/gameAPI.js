const BASE_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
  },
};

const fetchGames = async () => {
  const data = await fetch(BASE_URL, options);
  const response = await data.json();
  return response;
};

module.exports = { fetchGames };
