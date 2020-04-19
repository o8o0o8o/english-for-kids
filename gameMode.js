import { drawMainPage } from './drawMainPage.js';
import { readAndWriteResults } from './readAndWriteResults.js';

export const gameMode = (function IIFE() {
  let arr = [];
  let card = '';
  let state = false;
  const answers = [];
  let currentCard;
  function next() {
    if (arr[0] !== undefined) {
      card = arr[0].word;
      arr[0].audio.play();
      currentCard = arr.shift();
    } else {
      state = false;
      readAndWriteResults(answers);
      let wrong = 0;
      answers.forEach((a) => {
        wrong += +a.wrong;
      });
      let image = '';
      if (wrong === 0) {
        image = 'img/success.jpg';
      }
      if (wrong > 0) {
        image = 'img/failure.jpg';
      }
      const boxesContainer = document.getElementById('boxes-container');
      boxesContainer.innerHTML = '';
      const img = document.createElement('img');
      const wrongA = document.createElement('div');
      wrongA.classList.add('stats');
      wrongA.innerHTML = `${wrong}wrong answers`;
      img.classList.add('endgame');
      img.setAttribute('src', `${image}`);
      boxesContainer.appendChild(wrongA);
      boxesContainer.appendChild(img);
      setTimeout(() => drawMainPage(), 1000);
    }
  }
  function change(num) {
    arr = [...num];
    next();
  }
  function changeStatus(val) {
    state = val;
  }
  function setAnswer(val) {
    const answer = { word: card, right: 0, wrong: 0 };
    const star = document.createElement('img');
    const starRow = document.getElementById('stars');
    if (val === true) {
      star.setAttribute('src', 'img/star-win.svg');
      answer.right += 1;
    } else if (val === false) {
      star.setAttribute('src', 'img/star.svg');
      answer.wrong += 1;
    }
    const stars = Array.from(document.getElementsByClassName('star'));
    if (stars.length > 32) {
      stars.pop();
    }
    stars.unshift(star);
    starRow.innerHTML = '';
    star.classList.add('star');
    stars.forEach((a) => starRow.appendChild(a));
    answers.push(answer);
  }
  return {
    set(num) {
      change(num);
    },
    get() {
      return currentCard;
    },
    setStatus(val) {
      if (val === true || val === false) {
        changeStatus(val);
      }
    },
    getStatus() {
      return state;
    },
    getCard() {
      return card;
    },
    nextCard() {
      next();
    },
    answer(val) {
      if (val === true || val === false) {
        setAnswer(val);
      }
    },
  };
}());


