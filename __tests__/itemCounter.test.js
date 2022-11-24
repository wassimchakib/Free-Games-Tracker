/**
 * @jest-environment jsdom
 */
import countLists from '../src/modules/itemCounter.js';

describe('Count List Items', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <div class="cards">
            </div>
    `;
  });

  test('countLists throws null error', () => {
    const cards = document.querySelector('.cardss');

    const result = () => countLists(cards);

    expect(result).toThrow(TypeError);
  });

  test('countLists returns 0', () => {
    const cards = document.querySelector('.cards');

    const result = countLists(cards);

    expect(result).toBe(0);
  });

  test('countLists returns 1', () => {
    const cards = document.querySelector('.cards');
    const paragraph = document.createElement('p');
    cards.appendChild(paragraph);

    const result = countLists(cards);

    expect(result).toBe(1);
  });

  test('countLists returns 6', () => {
    const cards = document.querySelector('.cards');
    for (let i = 0; i < 5; i += 1) {
      const paragraph = document.createElement('p');
      cards.appendChild(paragraph);
    }

    const result = countLists(cards);

    expect(result).toBe(6);
  });
});
