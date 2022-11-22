import { fetchGames } from './gameAPI.js';
import { getLikes } from './involvementAPI.js';

// Function responsible for generating a single card

const generateCard = (
  singleObj,
) => `<div class="card" id="card_${singleObj.id}" value="${singleObj.id}">
  <img src="${singleObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${singleObj.title}</p>
      <i class="fa-regular fa-heart"></i>
  </div>
  <span class="card__likes">5 likes</span>
  <button class="card__btn comments">Comments</button>
  <button class="card__btn">Reservations</button>
</div>`;

const generatePopUp = (
  popUpObj,
) => `<div class="card" id="card_${popUpObj.id}" value="${popUpObj.id}">
          <div class="holder">
          <i class="fa fa-times"></i>
          <img src="${popUpObj.image}" alt="" class="card__img">
          <div>
          <div class="card__desc">
              <p>${popUpObj.title}</p>
          </div>
          <div class="pop-up-details">
            <span>platforms: ${popUpObj.platforms}</span>
            <span>type: ${popUpObj.type}</span>
            <span>users: ${popUpObj.users}</span>
            <span>worth: ${popUpObj.worth}</span>
          </div>
      </div>`;

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const likes = getLikes().then((result) => result);
  const listOfCards = [];
  fetchGames().then((result) => {
    let games = result;
    // Limit to only first 6 games
    games = games.slice(0, 6).map((game, index) => ({
      id: index + 1,
      title: game.title,
      thumbnail: game.thumbnail,
      image: game.image,
      likes: likes[index] ? likes[index].likes : 0,
      platforms: game.platforms,
      type: game.type,
      users: game.users,
      worth: game.worth,

    }));

    games.forEach((game) => {
      listOfCards.push(generateCard(game));
    });

    cards.innerHTML = listOfCards.join('');

    cards.addEventListener('click', (e) => {
      const popUp = document.querySelector('.pop-up-container');
      cards.classList.toggle('display__none');
      popUp.classList.toggle('display__none');

      let popUpMarkUp = '';
      const commentClass = e.target.classList.contains('comments');
      if (commentClass) {
        const popUpChildren = e.target.parentElement.parentElement.children;
        const index = Array.from(popUpChildren).indexOf(e.target.parentElement);
        const popUpCard = games[index];
        popUpMarkUp = generatePopUp(popUpCard);
        popUp.innerHTML = popUpMarkUp;

        const faTimes = document.querySelector('.fa-times');
        faTimes.addEventListener('click', () => {
          cards.classList.toggle('display__none');
          popUp.classList.toggle('display__none');
        });
      }
    });
  });
});
