import { fetchGames } from './gameAPI.js';
import minimizeText from './utilities.js';
import {
  getLikes,
  sendLike,
  getComments,
  sendComment,
} from './involvementAPI.js';
import countItems from './itemCounter.js';

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
            <h3>Comments (<span class="comment-counter"></span>)</h3>
                <ul class="comment-list">
                </ul>
          </div>
          <form>
            <h3 class="add-comment-title">Add a comment</h3>
              <label for="add-name">
                <input type="text" name="add-name" id="add-name" placeholder="Your name">
              </label>
              <label for="add-insight">
                <textarea type="text" name="add-insight" id="add-insight" placeholder="Your insights"></textarea>
              </label>
                <button type="submit" class="submit-comment">Comment</button>
          </form>

      </div>`;

const updateDOM = (previous, next) => {
  const cards = document.querySelector('.cards');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');
  console.log('hello');
  // Hide left Arrow if previous is equal to 0
  if (previous === 0) {
    leftArrow.classList.add('display__none');
  } else {
    leftArrow.classList.remove('display__none');
  }
  const listOfCards = [];

  fetchGames().then((result) => {
    const games = result;
    getLikes().then((likes) => {
      // Limit to only 6 cards
      const sliceOfGames = games.slice(previous, next).map((game, index) => {
        const like = likes.find(
          (like) => like.item_id === index + previous + 1,
        );
        return {
          id: index + 1,
          title: minimizeText(game.title, 40),
          thumbnail: game.thumbnail,
          image: game.image,
          likes: like ? like.likes : 0,
          platforms: game.platforms,
          type: game.type,
          users: game.users,
          worth: game.worth,
        };
      });
      sliceOfGames.forEach((game) => {
        listOfCards.push(generateCard(game));
      });

      cards.innerHTML = listOfCards.join('');
      // Event Listener on Like btns
      document.querySelectorAll('.card__btn').forEach((card, index) => {
        card.addEventListener('click', () => {
          sendLike(index + previous + 1).then((result) => {
            if (result === 'Created') {
              document
                .querySelectorAll('.card__likes')
                [index].classList.add('success');
            }
            updateDOM(previous, next);
          });
        });
      });

      // Count number of games
      const navGame = document.querySelector('.nav-games');
      const numberOfDisplayedGames = countItems(cards);
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

          const elementCounter = (commentList) => {
            const elementCounter = document.querySelector('.comment-counter');
            const numberOfDisplayedComments = countItems(commentList);
            elementCounter.innerHTML = numberOfDisplayedComments;
          };

          const displayComment = (comments) => {
            let liComments = '';
            comments.map((comment) => {
              const liMarkup = `
              <li class="comment-item">
                  <p> ${comment.creation_date} ${comment.username}: ${comment.comment}</p>
              </li>
              `;
              liComments += liMarkup;
              return comment;
            });
            return liComments;
          };

          getComments(index).then((comments) => {
            if (comments.length) {
              const liComments = displayComment(comments);
              const commentList = document.querySelector('.comment-list');
              commentList.innerHTML = liComments;
              elementCounter(commentList);
            } else {
              // console.log('empty');
            }

            const addName = document.getElementById('add-name');
            const addInsight = document.getElementById('add-insight');
            const addComment = document.querySelector('form');
            addComment.addEventListener('submit', (e) => {
              e.preventDefault();

              const name = addName.value;
              const insight = addInsight.value;
              if (name && insight) {
                sendComment(index, name, insight).then((response) => {
                  if (response === 'Created') {
                    const commentList = document.querySelector('.comment-list');
                    commentList.innerHTML = '';

                    getComments(index).then((comments) => {
                      const liComments = displayComment(comments);
                      // const commentList = document.querySelector('.comment-list');
                      commentList.innerHTML = liComments;
                      elementCounter(commentList);
                    });
                  }
                });
                addName.value = '';
                addInsight.value = '';
              }
            });
          });
        });
      });

      // Event Listener on Arrow buttons
      rightArrow.addEventListener('click', () => {
        console.log('hello from right arrow');
        previous = next;
        next += 6;
        updateDOM(previous, next);
      });
      // Event Listener on Arrow buttons
      leftArrow.addEventListener('click', () => {
        next = previous;
        previous -= 6;
        updateDOM(previous, next);
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // 2 Variables to count the next pages
  const previous = 0;
  const next = 6;
  updateDOM(previous, next);
});
