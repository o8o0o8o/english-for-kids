import { cards } from './cards.js';
import { calcSizes } from './calcSizes.js';
import { renderCategory } from './renderCategory.js';
import { sergeantState } from './sergeantState.js';

export function drawMainPage() {
  const { rowLength } = calcSizes();
  const boxes = [];
  let cardIndex = 0;
  const boxesContainer = document.getElementById('boxes-container');
  boxesContainer.innerHTML = '';
  for (let j = 0; j < 8 / rowLength; j += 1) {
    boxes[j] = [];
    for (let i = 0; i < rowLength; i += 1) {
      const CardContainer = document.createElement('div');
      const CardSuit = document.createElement('div');
      const ImageCircle = document.createElement('div');
      const stripe = document.createElement('div');
      const stripe1 = document.createElement('div');
      const stripeSet = document.createElement('div');
      const img = document.createElement('img');
      img.setAttribute('src', `${cards[1 + cardIndex][0].image}`);
      CardContainer.setAttribute('data', `${cards[0][cardIndex]}`);
      stripe1.innerText = cards[0][cardIndex];
      CardContainer.id = `${cardIndex}`;
      CardContainer.onclick = function namedFunc(e) {
        const category = +e.target.classList[1];
        renderCategory(category, rowLength);
      };
      CardContainer.appendChild(CardSuit);
      CardSuit.appendChild(stripeSet);
      stripeSet.appendChild(stripe);
      ImageCircle.appendChild(img);
      stripeSet.appendChild(stripe1);
      CardSuit.appendChild(ImageCircle);
      CardContainer.classList.add(`${cardIndex}`);
      CardSuit.classList.add(`${cardIndex}`);
      stripeSet.classList.add(`${cardIndex}`);
      ImageCircle.classList.add(`${cardIndex}`);
      img.classList.add(`${cardIndex}`);
      stripeSet.classList.add('front');
      stripe.classList.add('suit-stripe');
      if (sergeantState.get()) {
        stripe.classList.add('play-side-bar');
      } else {
        stripe.classList.remove('play-side-bar');
      }
      img.classList.add('img');
      CardSuit.classList.add('front');
      ImageCircle.classList.add('image-circle');
      stripe1.classList.add('suit-stripe-caption');
      CardContainer.classList.add('front');
      CardContainer.classList.add('glow-on-hover');
      CardSuit.classList.add(`${cardIndex}`);
      ImageCircle.classList.add(`${cardIndex}`);
      stripeSet.classList.add(`${cardIndex}`);
      img.classList.add(`${cardIndex}`);
      stripe.classList.add(`${cardIndex}`);
      stripe1.classList.add(`${cardIndex += 1}`);
      boxes[j].push(CardContainer);
    }
  }
  boxes.forEach((a) => {
    const row = document.createElement('div');
    row.classList.add('row');
    boxesContainer.appendChild(row);
    a.forEach((b) => {
      row.appendChild(b);
    });
  });
}
