document.body = document.createElement("body");
document.body.id = "main";
const main = document.getElementById("main");
main.onload = renderBoard();

function renderBoard() {
  let ScWidth = window.innerWidth;
  let ScHeight = window.innerHeight;
  let styleSh = document.styleSheets;
  let rowLength = 4;
  let sideBarWidth = '';
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
  const radioBtn = document.createElement("button");
  const buttonRow = document.createElement("div");
  const burgerStripesColumn = document.createElement("div");
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
    } else {
      sideBar.style.width = sideBarWidth;
      sideBarOpen = true;
    }
        //sideBar.classList.toggle("hidden");
    burgerBtn.classList.toggle('turn');
  };
  burgerStripesColumn.classList.add("burger-stripes");
  burgerBtn.classList.add("burger-button");
  sideBar.classList.add("side-bar");
  //sideBar.classList.add("hidden");
  buttonRow.classList.add("row");
  buttonRow.classList.add("button-row");
  // sideBar.id = 'side-bar';
  burgerBtn.appendChild(burgerStripesColumn);
  buttonRow.appendChild(burgerBtn);
  buttonRow.appendChild(radioBtn);
  main.appendChild(sideBar);
  main.appendChild(buttonRow);
  stripes.forEach((a) => {
    burgerStripesColumn.appendChild(a);
  });
  boxes.forEach((a) => {
    console.log("1");
    const row = document.createElement("div");
    row.classList.add("row");
    main.appendChild(row);
    a.forEach((b) => row.appendChild(b));
  });
}
