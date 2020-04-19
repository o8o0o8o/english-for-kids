import {drawMainPage} from './drawMainPage.js';
import {renderGeneral} from './renderGeneral.js';

document.body = document.createElement("body");
document.body.id = "main";
const main = document.getElementById("main");
main.onload = app();
//main.resize = renderBoard();

function app() {
  renderGeneral();
  drawMainPage();
};
