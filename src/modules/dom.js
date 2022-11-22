import { fetchGames } from './gameAPI.js';
import { getLikes } from './involvementAPI.js';

// Function responsible for generating a single card

const generateCard = (
  singleObj,
) => `<div class="card" id="card_${singleObj.id}">
  <img src="${singleObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${singleObj.title}</p>
      <i class="fa-regular fa-heart"></i>
  </div>
  <span class="card__likes">5 likes</span>
  <button class="card__btn">Comments</button>
  <button class="card__btn">Reservations</button>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const likes = getLikes().then((result) => result);
  const listOfCards = [];
  fetchGames().then((result) => {
    let games = result;
    // Limit to only first 6 games
    games = games.slice(0, 20).map((game, index) => ({
      id: index + 1,
      title: game.title,
      thumbnail: game.thumbnail,
      image: game.image,
      likes: likes[index] ? likes[index].likes : 0,
    }));

    games.forEach((game) => {
      listOfCards.push(generateCard(game));
    });

    cards.innerHTML = listOfCards.join('');
  });
});
