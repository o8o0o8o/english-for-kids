import { drawMainPage } from './drawMainPage.js';
import { renderGeneral } from './renderGeneral.js';

function app() {
  renderGeneral();
  drawMainPage();
}

document.body = document.createElement('body');
document.body.id = 'main';
const main = document.getElementById('main');
main.onload = app();
