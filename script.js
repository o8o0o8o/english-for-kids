document.body = document.createElement("body");
document.body.id = "main";
const main = document.getElementById("main");
main.onload = renderBoard();

function renderBoard() {
  let ScWidth = window.screen.width;
  let ScHeight = window.screen.height;
  let styleSh = document.styleSheets;
  let rowLength = 4;
  if (ScWidth >= 1020) {
    rowLength = 4;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.9}px;
              height: ${ScHeight / 3}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.front { width: ${(ScWidth * 0.9) / 4.05}px;
              height: ${(ScHeight / 3) * 0.98}px;}`,
      styleSh[0].rules.length
    );
    styleSh[0].insertRule(
      `.side-bar { width: ${((ScWidth * 0.1) / 2) + (ScWidth * 0.9) / 4.05}px;
              height: ${ScHeight}px;}`,
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
  const row1 = document.createElement("div");
  sideBar.classList.add("side-bar");
  row1.classList.add("row");
  row1.appendChild(burgerBtn);
  row1.appendChild(radioBtn);
  main.appendChild(sideBar);
  main.appendChild(row1);
  console.log(boxes);
  boxes.forEach((a) => {
    console.log("1");
    const row = document.createElement("div");
    row.classList.add("row");
    main.appendChild(row);
    a.forEach((b) => row.appendChild(b));
  });
}
