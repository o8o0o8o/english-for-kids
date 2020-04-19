import {calcSizes} from './calcSizes.js';
import {readAndWriteResults} from './readAndWriteResults.js';

export function showStatistics() {
    let { boxWidth } = calcSizes();
    const boxesContainer = document.getElementById("boxes-container");
    boxesContainer.innerHTML = "";
    let result = readAndWriteResults();
    console.log(result);
    result.sort((a, b) => {
      if (a.wrong < b.wrong) {
        return 1;
      }
      if (a.wrong > b.wrong) {
        return -1;
      }
    });
    console.log(result);
    result.forEach((a) => {
      const row = document.createElement("span");
      const percentage = document.createElement("div");
      const right = document.createElement("div");
      const wrong = document.createElement("div");
      const stats = document.createElement("div");
      row.appendChild(stats);
      row.appendChild(percentage);
      row.style.height = "2rem";
      percentage.appendChild(right);
      percentage.appendChild(wrong);
      percentage.classList.add("row");
      percentage.style.width = `${boxWidth}px`;
      row.classList.add("row");
      stats.classList.add("stats");
      right.classList.add("right");
      let fraction = 0;
      if (+a.right + +a.wrong !== 0) {
        fraction = boxWidth / (+a.right + +a.wrong);
        right.style.width = `${+a.right * +fraction}px`;
        wrong.style.width = `${+a.wrong * +fraction}px`;
      } else {
        console.log("else");
        fraction = boxWidth / 2;
        right.style.width = `${fraction}px`;
        wrong.style.width = `${fraction}px`;
      }
      wrong.classList.add("wrong");
      stats.innerHTML = `${a.word} right: ${a.right} wrong: ${a.wrong}`;
      boxesContainer.appendChild(row);
    });
  };