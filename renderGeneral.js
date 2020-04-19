import { cards } from './cards.js';
import { drawMainPage } from './drawMainPage.js';
import { calcSizes } from './calcSizes.js';
import { renderCategory } from './renderCategory.js';
import { sergeantState } from './sergeantState.js';
import { showStatistics } from './showStatistics.js';
import { gameMode } from './gameMode.js';

export function renderGeneral() {
  const { rowLength, sideBarWidth } = calcSizes();
  const burgerBtn = document.createElement('button');
  const buttonRow = document.createElement('div');
  const burgerStripesColumn = document.createElement('div');
  const switchBtn = document.createElement('label');
  const checkbox = document.createElement('input');
  const sliderBtn = document.createElement('div');
  const switchBtnWr = document.createElement('div');
  const sliderRow = document.createElement('div');
  const playStateBtn = document.createElement('div');
  const trainStateBtn = document.createElement('div');
  const sideBarMenu = document.createElement('div');
  const sideBar = document.createElement('div');
  const boxesContainer = document.createElement('div');
  boxesContainer.id = 'boxes-container';
  let sideBarOpen = false;
  switchBtnWr.classList.add('switch-wrapper');
  playStateBtn.classList.add('slider-button-caption');
  trainStateBtn.classList.add('slider-button-caption');
  sliderRow.classList.add('slider-row');
  if (sergeantState.get()) {
    playStateBtn.classList.remove('hidden');
    trainStateBtn.classList.add('hidden');
  } else {
    trainStateBtn.classList.remove('hidden');
    playStateBtn.classList.add('hidden');
  }
  switchBtn.classList.add('switch');
  sliderBtn.classList.add('slider');
  burgerStripesColumn.classList.add('burger-stripes');
  burgerBtn.classList.add('burger-button');
  sideBar.classList.add('side-bar');
  buttonRow.classList.add('row');
  buttonRow.classList.add('button-row');
  sideBarMenu.classList.add('hidden');
  sideBarMenu.classList.add('side-bar-menu');
  switchBtnWr.appendChild(switchBtn);
  sliderRow.appendChild(playStateBtn);
  sliderRow.appendChild(trainStateBtn);
  sliderBtn.appendChild(sliderRow);
  sideBar.appendChild(sideBarMenu);
  switchBtn.appendChild(checkbox);
  switchBtn.appendChild(sliderBtn);
  buttonRow.appendChild(burgerBtn);
  buttonRow.appendChild(switchBtnWr);
  burgerBtn.appendChild(burgerStripesColumn);
  main.appendChild(sideBar);
  main.appendChild(buttonRow);
  main.appendChild(boxesContainer);
  burgerBtn.onmousedown = function () {
    if (sideBarOpen) {
      sideBar.style.width = 0;
      sideBarOpen = false;
      sideBarMenu.classList.add('hidden');
      burgerBtn.classList.toggle('turn');
    } else {
      sideBar.style.width = sideBarWidth;
      sideBarOpen = true;
      sideBarMenu.classList.remove('hidden');
      burgerBtn.classList.toggle('turn');
    }
  };
  main.onmouseup = function (e) {
    if (
      sideBarOpen
        && sideBar.clientWidth === +sideBarWidth.match(/(\d)*(?=\.)/)[0]
    ) {
      sideBar.style.width = 0;
      sideBarOpen = false;
      sideBarMenu.classList.add('hidden');
      burgerBtn.classList.toggle('turn');
    }
  };
  checkbox.setAttribute('type', 'checkbox');
  playStateBtn.innerText = 'play';
  trainStateBtn.innerText = 'train';
  const stripes = [];
  for (let i = 0; i < 3; i += 1) {
    const stripe = document.createElement('div');
    stripe.classList.add('burger-stripe');
    stripes.push(stripe);
  }
  switchBtn.onmouseup = function () {
    sergeantState.toggle(true);
    playStateBtn.classList.toggle('hidden');
    trainStateBtn.classList.toggle('hidden');
    sideBar.classList.toggle('play-side-bar');
    const start = document.getElementsByClassName('start-button')[0];
    if (start) {
      start.classList.toggle('hidden');
    }
    const arrOfStripes = Array.from(
      document.getElementsByClassName('suit-stripe'),
    );
    arrOfStripes.forEach((a) => a.classList.toggle('play-side-bar'));
    const arrOfSetOfStripes = Array.from(
      document.getElementsByClassName('stripe-set'),
    );
    arrOfSetOfStripes.forEach((a) => a.classList.toggle('hidden'));
    const arrOfCards = Array.from(document.getElementsByClassName('flip-card'));
    arrOfCards.forEach((a) => a.classList.toggle('wobble-hor-bottom'));
    if (!sergeantState.get()) {
      const category = +document.getElementsByClassName('indentation')[0]
        .classList[0];
      if (category !== -1) {
        renderCategory(category, rowLength);
      }
    } else {
      arrOfCards.forEach((a) => (a.onclick = null));
    }
    setTimeout(() => {
      const arrOfCards = Array.from(document.getElementsByClassName('flip-card'));
      arrOfCards.forEach((a) => a.classList.toggle('wobble-hor-bottom'));
    }, 800);
  };
  const mainWindow = document.createElement('div');
  mainWindow.classList.add('-1');
  mainWindow.classList.add('burger-menu-item');
  mainWindow.classList.add('indentation');
  mainWindow.id = '-1';
  mainWindow.innerText = 'Main Window';
  sideBarMenu.appendChild(mainWindow);
  cards[0].forEach((a, i) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add(i);
    menuItem.classList.add('burger-menu-item');
    menuItem.id = i;
    menuItem.innerText = a;
    sideBarMenu.appendChild(menuItem);
  });
  const statistics = document.createElement('div');
  statistics.classList.add('-2');
  statistics.classList.add('burger-menu-item');
  statistics.id = '-2';
  statistics.innerText = 'Statistics';
  sideBarMenu.appendChild(statistics);
  main.onclick = function (e) {
    const id = +e.target.classList[0];
    console.log(id);
    if (typeof id === 'number' && id === id) {
      const arrMenuItems = Array.from(
        document.getElementsByClassName('burger-menu-item'),
      );
      arrMenuItems.forEach((a) => a.classList.remove('indentation'));
      document.getElementById(id).classList.add('indentation');
      switch (id) {
        case -1:
          drawMainPage();
          break;
        case -2:
          showStatistics();
          break;
        default:
          renderCategory(id, rowLength);
          break;
      }
    } else if (
      gameMode.getStatus()
        && e.target.classList[0].includes(gameMode.getCard())
    ) {
      const audio = new Audio('audio/correct.mp3');
      audio.play();
      setTimeout(() => {
        gameMode.answer(true);
        gameMode.nextCard();
      }, 400);
    } else if (
      gameMode.getStatus()
        && e.target.classList[0].charAt(0) === '-'
    ) {
      const audio = new Audio('audio/error.mp3');
      audio.play();
      gameMode.answer(false);
    }
  };
  stripes.forEach((a) => {
    burgerStripesColumn.appendChild(a);
  });
}
