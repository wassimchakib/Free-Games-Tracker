export default class GameAPI {
  static BASE_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';

  static options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  static fetchGames = async () => {
    const data = await fetch(this.BASE_URL, this.options);
    const response = await data.json();
    return response;
  };
}