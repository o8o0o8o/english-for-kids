document.body = document.createElement("body");
document.body.id = "main";
const main = document.getElementById("main");
main.onload = renderBoard();

function renderBoard() {
  let ScWidth = window.innerWidth;
  let ScHeight = window.innerHeight;
  let styleSh = document.styleSheets;
  let rowLength = 4;
  let sideBarWidth = "";
  if (ScWidth >= 1020) {
    sideBarWidth = `${(ScWidth * 0.1) / 2 + (ScWidth * 0.9) / 4.05}px`;
    rowLength = 4;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.86}px;
              height: ${ScHeight / 3}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.front { width: ${(ScWidth * 0.86) / 4.05}px;
              height: ${(ScHeight / 3) * 0.98}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.side-bar {
              height: ${ScHeight}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.button-row {height: ${(ScHeight / 10) * 0.98}px;}`,
      styleSh[0].rules.length
    );
  } else if (ScWidth < 1020 && ScWidth >= 600) {
    rowLength = 2;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.9}px;
              height: ${ScHeight / 3}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.front { width: ${(ScWidth * 0.9) / 4.05}px;
              height: ${(ScHeight / 3) * 0.95}px;}`,
      styleSh[0].rules.length
    );
  } else if (ScWidth < 600) {
    rowLength = 1;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.9}px;
              height: ${ScHeight / 3}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.front { width: ${(ScWidth * 0.9) / 4.05}px;
              height: ${(ScHeight / 3) * 0.95}px;}`,
      styleSh[0].rules.length
    );
  }
  let boxes = [];
  for (let j = 0; j < 8 / rowLength; j += 1) {
    boxes[j] = [];
    for (let i = 0; i < rowLength; i += 1) {
      let Flip = document.createElement("div");
      let FlipInner = document.createElement("div");
      let FlipFront = document.createElement("div");
      let FrontBase = document.createElement("div");
      let FlipBack = document.createElement("div");
      let FlipBackBase = document.createElement("div");
      Flip.id = `${j}-${i}`;
      FlipBack.appendChild(FlipBackBase);
      FlipFront.appendChild(FrontBase);
      FlipInner.appendChild(FlipFront);
      FlipInner.appendChild(FlipBack);
      Flip.appendChild(FlipInner);
      FrontBase.classList.add("front");
      Flip.classList.add("front");
      Flip.classList.add("flip-card");
      FlipInner.classList.add("flip-card-inner");
      FlipFront.classList.add("flip-card-front");
      FlipBack.classList.add("flip-card-back");
      boxes[j].push(Flip);
    }
  }
  const sideBar = document.createElement("div");
  const burgerBtn = document.createElement("button");
  const buttonRow = document.createElement("div");
  const burgerStripesColumn = document.createElement("div");
  const switchBtn = document.createElement("label");
  const checkbox = document.createElement("input");
  const sliderBtn = document.createElement("div");
  const switchBtnWr = document.createElement("div");
  const sliderRow = document.createElement("div");
  const playStateBtn = document.createElement("div");
  const trainStateBtn = document.createElement("div");
  const sideBarMenu = document.createElement("div");
  const boxesContainer = document.createElement('dic');
  checkbox.setAttribute("type", "checkbox");

  playStateBtn.innerText = "play";
  trainStateBtn.innerText = "train";

  let stripes = [];
  for (let i = 0; i < 3; i += 1) {
    const stripe = document.createElement("div");
    stripe.classList.add("burger-stripe");
    stripes.push(stripe);
  }
  let sideBarOpen = false;
  burgerBtn.onmousedown = function () {
    if (sideBarOpen) {
      sideBar.style.width = 0;
      sideBarOpen = false;
      sideBarMenu.classList.add('hidden');
      burgerBtn.classList.toggle("turn");
    } else {
      sideBar.style.width = sideBarWidth;
      sideBarOpen = true;
      sideBarMenu.classList.remove('hidden');
      burgerBtn.classList.toggle("turn");
    }
  };
  main.onmouseup = function(e) {
    if (sideBarOpen && (sideBar.clientWidth === +sideBarWidth.match(/(\d)*(?=\.)/)[0])) {
      sideBar.style.width = 0;
      sideBarOpen = false;
      sideBarMenu.classList.add('hidden');
      burgerBtn.classList.toggle("turn");
    }
  };
  switchBtn.onmouseup = function() {
    playStateBtn.classList.toggle("hidden");
    trainStateBtn.classList.toggle("hidden");
    sideBar.classList.toggle("play-side-bar");
  };
  switchBtnWr.classList.add("switch-wrapper");
  playStateBtn.classList.add("slider-button-caption");
  trainStateBtn.classList.add("slider-button-caption");
  sliderRow.classList.add("slider-row");
  playStateBtn.classList.add("hidden");
  switchBtn.classList.add("switch");
  sliderBtn.classList.add("slider");
  burgerStripesColumn.classList.add("burger-stripes");
  burgerBtn.classList.add("burger-button");
  sideBar.classList.add("side-bar");
  buttonRow.classList.add("row");
  buttonRow.classList.add("button-row");
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
  boxes.forEach((a) => {
    a.forEach((b) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("burger-menu-item");
      menuItem.innerText = b.id;
      sideBarMenu.appendChild(menuItem);
    });
  });
  stripes.forEach((a) => {
    burgerStripesColumn.appendChild(a);
  });
  boxes.forEach((a) => {
    const row = document.createElement("div");
    row.classList.add("row");
    boxesContainer.appendChild(row);
    a.forEach((b) => row.appendChild(b));
  });
}
