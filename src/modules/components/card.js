/*
 * HTML code for single card
 */

export default (
  cardObj,
) => `<div class="card" id="card_${cardObj.id}" value="${cardObj.id}">
  <img src="${cardObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${cardObj.title}</p>
      <i class="fa-regular fa-heart card__btn"></i>
  </div>
  <span class="card__likes">${cardObj.likes} likes</span>
  <button class="card__comments comments">Comments</button>
  <button class="card__reservations">Reservations</button>
</div>`;
