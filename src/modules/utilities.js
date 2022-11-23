export default (str, numOfCharacters) => (str.length < numOfCharacters ? str : `${str.slice(0, numOfCharacters)}...`);
export const checkInput = (str) => str.trim().length > 0;