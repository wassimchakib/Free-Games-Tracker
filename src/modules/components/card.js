/*
 * HTML code for single card
 */

export default (
  cardObj,
) => `<div class="card" id="card_${cardObj.id}" value="${cardObj.id}">
  <img src="${cardObj.thumbnail}" alt="" class="card__img">
  <div class="card__desc">
      <p>${cardObj.title}</p>
      <div class="card__like">
        <span class="card__likes">${cardObj.likes}</span>
        <i class="fa-regular fa-heart card__btn"></i>
      </div>
  </div>
  
  
  <button class="card__comments comments"><span>Comments</span><i class="fa-solid fa-comments"></i></button>
  <a href="${cardObj.open_giveaway}"class="card__giveaways btn" target="_blank"><span>Open Giveaway</span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>`;
