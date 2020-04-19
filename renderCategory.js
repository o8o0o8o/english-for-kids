import { cards } from './cards.js';
import { calcSizes } from './calcSizes.js';
import { sergeantState } from './sergeantState.js';
import { gameMode } from './gameMode.js';

export function renderCategory(category, rowLength) {
  const boxesContainer = document.getElementById('boxes-container');
  boxesContainer.innerHTML = '';
  const boxes = [];
  let cardIndex = 0;
  for (let j = 0; j < 8 / rowLength; j += 1) {
    boxes[j] = [];
    for (let i = 0; i < rowLength; i += 1) {
      const Flip = document.createElement('div');
      const FlipInner = document.createElement('div');
      const FlipFront = document.createElement('div');
      const FrontBase = document.createElement('div');
      const imageContainer = document.createElement('div');
      const img = document.createElement('img');
      const stripeSet = document.createElement('div');
      const stripe1 = document.createElement('div');
      const button = document.createElement('button');
      const buttonCaption = document.createElement('div');
      const FlipBack = document.createElement('div');
      const FlipBackBase = document.createElement('div');
      if (!sergeantState.get()) {
        const audio = new Audio(`${cards[1 + category][cardIndex].audioSrc}`);
        Flip.onclick = function () {
          audio.play();
        };
      }
      buttonCaption.innerHTML = '\u27f3';
      FlipBackBase.innerText = cards[1 + category][cardIndex].translation;
      Flip.setAttribute('data', `${cards[0][cardIndex]}`);
      img.setAttribute('src', `${cards[1 + category][cardIndex].image}`);
      stripe1.innerText = cards[1 + category][cardIndex].word;
      Flip.id = `${cardIndex}`;
      img.classList.add(`-${cards[1 + category][cardIndex].word}`);
      button.onclick = function () {
        FlipInner.classList.add('flipper');
      };
      Flip.onmouseleave = function () {
        FlipInner.classList.remove('flipper');
      };
      stripeSet.appendChild(stripe1);
      FrontBase.appendChild(stripeSet);
      button.appendChild(buttonCaption);
      FlipBack.appendChild(FlipBackBase);
      FlipFront.appendChild(FrontBase);
      imageContainer.appendChild(img);
      FrontBase.appendChild(imageContainer);
      FlipInner.appendChild(FlipFront);
      FlipInner.appendChild(FlipBack);
      Flip.appendChild(FlipInner);
      stripe1.appendChild(button);
      stripeSet.classList.add('stripe-set');
      if (!sergeantState.get()) {
        stripeSet.classList.remove('hidden');
      } else {
        stripeSet.classList.add('hidden');
      }
      FlipInner.classList.add('front');
      buttonCaption.classList.add('button-caption');
      button.classList.add('flip-button');
      button.classList.add('rotate-scale-down');
      img.classList.add('front');
      stripe1.classList.add('card-stripe-caption');
      FrontBase.classList.add('front');
      Flip.classList.add('front');
      Flip.classList.add('glow-on-hover');
      Flip.classList.add('flip-card');
      FlipInner.classList.add('flip-card-inner');
      FlipFront.classList.add('flip-card-front');
      FlipBack.classList.add('flip-card-back');
      FlipBackBase.classList.add('back-base');
      boxes[j].push(Flip);
      cardIndex++;
    }
  }
  const start = document.createElement('button');
  start.classList.add('start-button');
  start.classList.add('shadow-inset-center');
  start.onclick = function () {
    if (gameMode.getStatus()) {
      gameMode.get().audio.play();
    } else {
      start.classList.toggle('start-button');
      start.classList.add('restart-button');
      start.innerHTML = '\u27f3';
      const category = +document.getElementsByClassName('indentation')[0]
        .classList[0];
      const numbers = [];
      for (let i = 0; i < 8; i++) {
        numbers.push({ index: Math.random() * 8, value: i });
      }
      numbers.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        }
        if (a.index < b.index) {
          return -1;
        }
      });
      numbers.forEach((a) => {
        a.audio = new Audio(`${cards[1 + category][a.value].audioSrc}`);
        a.word = `${cards[1 + category][a.value].word}`;
      });
      gameMode.set(numbers);
      gameMode.setStatus(true);
    }
  };
  const startCaption = document.createElement('div');
  startCaption.innerHTML = 'Start game';
  startCaption.classList.add('start-caption');
  if (sergeantState.get()) {
    start.classList.remove('hidden');
  } else {
    start.classList.add('hidden');
  }
  const { starHeight } = calcSizes();
  start.appendChild(startCaption);
  boxes.push([start]);
  const stars = document.createElement('div');
  stars.classList.add('row');
  stars.classList.add('stars-row');
  stars.style.height = `${starHeight}px`;
  stars.id = 'stars';
  boxesContainer.appendChild(stars);
  boxes.forEach((a, i, arr) => {
    const row = document.createElement('div');
    row.classList.add('row');
    if (i < arr.length - 1) {
      boxesContainer.appendChild(row);
      a.forEach((b) => {
        row.appendChild(b);
      });
    } else {
      const anotherRow = document.createElement('div');
      anotherRow.classList.add('button-row');
      anotherRow.classList.add('start-button-row');
      boxesContainer.appendChild(anotherRow);
      a.forEach((b) => {
        anotherRow.appendChild(b);
      });
    }
  });
  return boxes;
}
