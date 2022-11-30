import GameAPI from './gameAPI.js';
import InvolvementAPI from './involvementAPI.js';
import generateCard from './components/card.js';
import generatePopUp from './components/comment.js';
import countItems from './itemCounter.js';
import minimizeText, { checkInput } from './utilities.js';

let previous = 0;
let next = 6;
let totalItems = 0;

const generateAPI = async (previous = 0, next = -1) => {
  const result = await GameAPI.fetchGames();
  totalItems = result.length;
  const likes = await InvolvementAPI.getLikes();
  const sliceOfGames = result.slice(previous, next).map((game, index) => {
    const like = likes.find((like) => like.item_id === index + previous + 1);
    return {
      id: index + 1,
      bigtitle: game.title,
      title: minimizeText(game.title, 40),
      thumbnail: game.thumbnail,
      image: game.image,
      likes: like ? like.likes : 0,
      platforms: game.platforms.split(', '),
      type: game.type,
      users: game.users,
      worth: game.worth,
      open_giveaway: game.open_giveaway,
    };
  });
  return sliceOfGames;
};

/**
 * Returns an array of generated cards
 */

const generateListOfGames = async (previous, next) => {
  const generatedCards = [];
  const sliceOfGames = await generateAPI(previous, next);
  sliceOfGames.forEach((game) => {
    generatedCards.push(generateCard(game));
  });
  return generatedCards;
};

/**
 * Shows the homepage
 */

const renderHomePage = async (previous, next) => {
  // Showing the list of cards

  const cards = document.querySelector('.cards');
  const listOfCards = await generateListOfGames(previous, next);
  cards.innerHTML = listOfCards.join('');

  // Render comments
  // eslint-disable-next-line no-use-before-define
  renderComment(previous, next);

  // Event listener for like buttons

  const cardBtns = document.querySelectorAll('.card__btn');
  cardBtns.forEach((cardButton, index) => {
    cardButton.addEventListener('click', async () => {
      await InvolvementAPI.sendLike(index + previous + 1);
      document.querySelectorAll('.card__likes')[index].classList.add('success');
      await renderHomePage(previous, next);
    });
  });
};

/**
 * Generate a list of comments <li>
 */
const generateComments = (obj) => {
  let arrayOfComments = [];
  if (Array.isArray(obj)) {
    arrayOfComments = obj.map(
      (comment) => `
      <li class="comment-item">
        <i class="fas fa-user-circle fa-2xl"></i>
        <div class="comment-user">
          <h4> ${comment.username}</h4>
          <p>${comment.comment}</p>
        </div>
        <p class="timestamp">${comment.creation_date}</p>
      </li>
      `,
    );
  } else {
    arrayOfComments = [
      `<li class="comment-item">
    No comments found, Be the first one to comment
  </li>`,
    ];
  }

  return arrayOfComments;
};

const renderListOfCommentsForEachCard = async (index) => {
  const result = await InvolvementAPI.getComments(index);
  const liComments = generateComments(result);
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = liComments.join('');
  const commentDiv = document.querySelector('.comment-counter');
  const numberOfDisplayedComments = countItems(commentList);
  commentDiv.innerHTML = numberOfDisplayedComments;
};

const showOrHideArrowButton = (leftArrow, rightArrow) => {
  // Hide left Arrow if previous is equal to 0
  if (previous === 0) {
    leftArrow.classList.add('display__none');
  } else {
    leftArrow.classList.remove('display__none');
  }
  // Hide right Arrow if next is greater or equal to totalItems
  if (next >= totalItems) {
    rightArrow.classList.add('display__none');
  } else {
    rightArrow.classList.remove('display__none');
  }
};

const renderComment = async (previous, next) => {
  // Event listener for comment buttons

  const comments = document.querySelectorAll('.comments');
  comments.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async () => {
      const popUpComment = document.querySelector('.pop-up-container');
      const cards = document.querySelector('.container');

      // Generate the pop up object and then populate it
      const popUpObj = await generateAPI(previous, next);

      popUpComment.innerHTML = generatePopUp(popUpObj[index]);

      // Hide the cards from UI and show the popup

      cards.classList.toggle('display__none');
      popUpComment.classList.toggle('display__none');

      // Close Button event listener
      const closeBtn = document.querySelector('.fa-times');
      closeBtn.addEventListener('click', () => {
        cards.classList.toggle('display__none');
        popUpComment.classList.toggle('display__none');
      });

      // Show how many number of comments in the card
      const commentDiv = document.querySelector('.comment-counter');
      const numberOfDisplayedComments = countItems(commentDiv);
      commentDiv.innerHTML = numberOfDisplayedComments;

      // render lists of comment
      await renderListOfCommentsForEachCard(index + previous);

      // Event listener for adding a new comment
      const form = document.querySelector('form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const comment = e.target[1].value;
        if (checkInput(name) && checkInput(comment)) {
          const response = await InvolvementAPI.sendComment(
            index + previous,
            name,
            comment,
          );
          if (response === 'Created') {
            await renderListOfCommentsForEachCard(index + previous);
          }
          form.reset();
        }
      });
    });
  });
};

const updateDOM = async (previous, next) => {
  await renderHomePage(previous, next);
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');
  showOrHideArrowButton(leftArrow, rightArrow);
};

const btnsEventListener = () => {
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');

  // Event Listener on Arrow buttons
  rightArrow.addEventListener('click', () => {
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
};

document.addEventListener('DOMContentLoaded', () => {
  updateDOM(previous, next);
  btnsEventListener();
});

export default generateComments;
