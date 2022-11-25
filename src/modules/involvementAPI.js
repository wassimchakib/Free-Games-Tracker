export default class InvolvementAPI {
  static BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_KEY}`;

  static likeEndpoint = '/likes';

  static commentEndPoint = '/comments';

  static getLikes = async () => {
    const data = await fetch(this.BASE_URL + this.likeEndpoint);
    const result = await data.json();
    return result;
  };

  static sendLike = async (id) => {
    const data = await fetch(this.BASE_URL + this.likeEndpoint, {
      method: 'POST',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await data.text();
    return response;
  };

  static getComments = async (index) => {
    const URL = `${this.BASE_URL + this.commentEndPoint}?item_id=${index}`;
    const data = await fetch(URL);
    const result = await data.json();
    return result;
  };

  static sendComment = async (id, name, comments) => {
    const data = await fetch(this.BASE_URL + this.commentEndPoint, {
      method: 'POST',
      body: JSON.stringify({ item_id: id, username: name, comment: comments }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await data.text();
    return response;
  };
}
