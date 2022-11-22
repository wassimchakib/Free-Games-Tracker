import { fetchGames } from './gameAPI.js';
import {
  getLikes, sendLike, getComments,
} from './involvementAPI.js';
import countListOfGames from './itemCounter.js';

// Function responsible for generating a single card

const generateCard = (
  singleObj,
) => `<div class="card" id="card_${singleObj.id}" value="${singleObj.id}">
  <img src="${singleObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${singleObj.title}</p>
      <i class="fa-regular fa-heart card__btn"></i>
  </div>
  <span class="card__likes">${singleObj.likes} likes</span>
  <button class="card__comments comments">Comments</button>
  <button class="card__reservations">Reservations</button>
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

          <div class="comment-container">
            <h3>Comments (<span>1</span>)</h3>
                <ul class="comment-list">
                </ul>
          </div>

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
          platforms: game.platforms,
          type: game.type,
          users: game.users,
          worth: game.worth,
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

      // Show popup
      const comments = document.querySelectorAll('.comments');

      comments.forEach((comment, index) => {
        comment.addEventListener('click', () => {
          const popUp = document.querySelector('.pop-up-container');
          cards.classList.toggle('display__none');
          popUp.classList.toggle('display__none');

          let popUpMarkUp = '';

          const popUpCard = games[index];
          popUpMarkUp = generatePopUp(popUpCard);
          popUp.innerHTML = popUpMarkUp;

          const faTimes = document.querySelector('.fa-times');
          faTimes.addEventListener('click', () => {
            cards.classList.toggle('display__none');
            popUp.classList.toggle('display__none');
          });

          getComments(index).then((comments) => {
            let liComments = '';
            if (comments.length) {
              comments.map((comment) => {
                const liMarkup = `
                <li class="comment-item">
                    <p> ${comment.creation_date} ${comment.username}: ${comment.comment}</p>
                </li>
                `;
                liComments += liMarkup;
                return liComments;
              });

              const commentList = document.querySelector('.comment-list');
              commentList.innerHTML = liComments;
            } else {
              // console.log('empty');
            }
          });
        });
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  updateDOM();
});
