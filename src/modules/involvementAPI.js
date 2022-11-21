const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_KEY}`;
const likeEndpoint = '/likes';

const getLikes = async () => {
  const data = await fetch(BASE_URL + likeEndpoint);
  const result = await data.json();
  return result;
};

module.exports = { getLikes };
