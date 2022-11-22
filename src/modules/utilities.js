export default (str, numOfCharacters) => (str.length < numOfCharacters ? str : `${str.slice(0, numOfCharacters)}...`);
