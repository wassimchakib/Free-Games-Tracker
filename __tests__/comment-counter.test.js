/**
 * @jest-environment jsdom
 */
import commentCounter from '../src/modules/itemCounter.js';
import generateComments from '../src/modules/dom.js';

describe('Comment Counter tests', () => {
  document.body.innerHTML = `
            <ul class="comment-list">
            </ul>
     `;

  const commentObj = [
    {
      username: 'test-user',
      creation_date: '2022-11-20',
      comment: 'comment',
    },
  ];

  const commentObj2 = [
    {
      username: 'test-user-2',
      creation_date: '2022-11-21',
      comment: 'comment-2',
    },
    {
      username: 'test-user-3',
      creation_date: '2022-11-22',
      comment: 'comment-3',
    },
  ];

  const commentList = document.querySelector('.comment-list');

  it('commentList throws null error', () => {
    const commentListTest = document.querySelector('.cardss');
    const result = () => commentCounter(commentListTest);
    expect(result).toThrow(TypeError);
  });

  it('commentList returns 0 of no comment added', () => {
    const result = commentCounter(commentList);
    expect(result).toBe(0);
  });

  it('commentList returns 1 if 1 comments added', () => {
    commentList.innerHTML = generateComments(commentObj).join('');
    const result = commentCounter(commentList);
    expect(result).toBe(1);
  });

  it('commentList returns 2 if 2 comments added on the same card', () => {
    commentList.innerHTML = generateComments(commentObj2).join('');
    const result = commentCounter(commentList);
    expect(result).toBe(2);
  });

  it('commentList returns 10 if 9 more comments added to the same card', () => {
    let innerMarkup = '';
    for (let i = 0; i < 10; i += 1) {
      innerMarkup += generateComments(commentObj).join('');
    }
    commentList.innerHTML = innerMarkup;
    const result = commentCounter(commentList);
    expect(result).toBe(10);
  });
});
