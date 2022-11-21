const BASE_URL = 'https://www.gamerpower.com/api/giveaways';

const fetchGames = async () => {
  const data = await fetch(BASE_URL);
  const response = await data.json();
  return response;
};

module.exports = { fetchGames };