import { fetchGames } from './gameAPI.js';
import { getLikes, sendLike } from './involvementAPI.js';
import countListOfGames from './itemCounter.js';

// Function responsible for generating a single card

const generateCard = (
  singleObj,
) => `<div class="card" id="card_${singleObj.id}">
  <img src="${singleObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${singleObj.title}</p>
      <i class="fa-regular fa-heart card__btn"></i>
  </div>
  <span class="card__likes">${singleObj.likes} likes</span>
  <button class="card__comments">Comments</button>
  <button class="card__reservations">Reservations</button>
</div>`;

const updateDOM = () => {
  const cards = document.querySelector('.cards');
  const listOfCards = [];
  fetchGames().then((result) => {
    let games = result;
    getLikes().then((likes) => {
      // Limit to only first 6 games
      games = games.slice(0, 6).map((game, index) => {
        const like = likes.find((like) => like.item_id === index + 1);
        return {
          id: index + 1,
          title: game.title,
          thumbnail: game.thumbnail,
          image: game.image,
          likes: like ? like.likes : 0,
        };
      });

      games.forEach((game) => {
        listOfCards.push(generateCard(game));
      });

      cards.innerHTML = listOfCards.join('');
      // Event Listener on Like btns
      document.querySelectorAll('.card__btn').forEach((card, index) => {
        card.addEventListener('click', () => {
          sendLike(index + 1).then((result) => {
            if (result === 'Created') {
              document.querySelectorAll('.card__likes')[index].classList.add('success');
            }
            updateDOM();
          });
        });
      });

      // Count number of games
      const navGame = document.querySelector('.nav-games');
      const numberOfDisplayedGames = countListOfGames(cards);
      navGame.textContent = `Games (${numberOfDisplayedGames})`;
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  updateDOM();
});
