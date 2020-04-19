import {cards} from './cards.js';

export function readAndWriteResults(result) {
    if (localStorage.getItem("base") === null) {
      let base = [];
      for (let i = 1; i < cards.length; i += 1) {
        cards[i].forEach((a) => base.push({ word: a.word, right: 0, wrong: 0 }));
      }
      localStorage.setItem("base", JSON.stringify(base));
    } else {
      if (Array.isArray(result)) {
        let base = JSON.parse(localStorage.getItem("base"));
        base.forEach((a) =>
          result.forEach((b) => {
            if (a.word === b.word) {
              a.right = a.right + b.right;
              a.wrong = a.wrong + b.wrong;
            }
          })
        );
        localStorage.setItem("base", JSON.stringify(base));
      }
    }
    return JSON.parse(localStorage.getItem("base"));
  };