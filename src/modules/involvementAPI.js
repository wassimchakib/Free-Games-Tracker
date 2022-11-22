const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_KEY}`;
const likeEndpoint = '/likes';
const commentEndPoint = '/comments';

const getLikes = async () => {
  const data = await fetch(BASE_URL + likeEndpoint);
  const result = await data.json();
  return result;
};

const sendLike = async (id) => {
  const data = await fetch(BASE_URL + likeEndpoint, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await data.text();
  return response;
};

const getComments = async () => {
  const data = await fetch(BASE_URL + commentEndPoint);
  const result = await data.json();
  return result;
};

module.exports = { getLikes, sendLike, getComments };
