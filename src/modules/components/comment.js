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
    <h3>${popUpObj.bigtitle}</h3>
  </div>
  <div class="pop-up-details">
    <p><span class="details">Platforms:</span> ${popUpObj.platforms.map((platform) => `<span class="tag">${platform}</span>`).join('')}</p>
    <p><span class="details">Type: <span class="details-obj">${popUpObj.type}</span></span></p>
    <p><span class="details">Users: <span class="details-obj">${popUpObj.users}</span></span></p>
    <p><span class="details">Worth: <span class="details-obj">${popUpObj.worth}</span></span></p>
  </div>
  <div class="comment-container">
    <h3 class="title-comments">Comments (<span class="comment-counter"></span>)</h3>
      <ul class="comment-list">
      </ul>
  </div>
  <form class="form-popup">
    <h3 class="add-comment-title">Add a comment <i class="fa-solid fa-comment logo"></i></h3>
    <div class="form__body">
      <div class="form-item">
        <input class="form__field" type="text" name="name" id="add-name" autocomplete="off" required>
        <label for="add-name">Name</label>
      </div>
      <div class="form-item">
      <textarea class="form__field" type="text" name="insight" id="add-insight" required></textarea>
      <label for="add-insight">Comment</label>
      </div>
      <div class="form-submit">
        <input type="submit" class="submit-comment btn" value="Comment"></input>
      </div>
    </div>
</form>
</div>`;
