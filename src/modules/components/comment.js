/*
 * HTML code for the popup
 */

export default (
  popUpObj,
) => `<div class="card-popup" id="card_${popUpObj.id}" value="${popUpObj.id}">
  <div class="close-btn">
    <i class="fa fa-times"></i>
  </div>
  <img src="${popUpObj.image}" alt="" class="card-popup__img">
  <div class="card-popup__desc">
    <h3>${popUpObj.title}</h3>
  </div>
  <div class="pop-up-details">
    <p><span class="details">Platforms:</span> ${popUpObj.platforms.map((platform) => `<span class="tag">${platform}</span>`).join('')}</p>
    <span class="details">Type: <span class="details-obj">${popUpObj.type}</span></span>
    <span class="details">Users: <span class="details-obj">${popUpObj.users}</span></span>
    <span class="details">Worth: <span class="details-obj">${popUpObj.worth}</span></span>
  </div>
  <div class="comment-container">
    <h3 class="title-comments">Comments (<span class="comment-counter"></span>)</h3>
      <ul class="comment-list">
      </ul>
  </div>
  <form class="form-popup">
    <h3 class="add-comment-title">Add a comment</h3>
    <label for="add-name">
      <input type="text" name="name" id="add-name" placeholder="Your name">
    </label>
    <label for="add-insight">
      <textarea type="text" name="insight" id="add-insight" placeholder="Your insights"></textarea>
    </label>
    <label for="">
      <input type="submit" class="submit-comment" value="Comment"></input>
    </label>
</form>
</div>`;
