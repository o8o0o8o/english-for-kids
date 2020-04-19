export function calcSizes() {
    let ScWidth = window.innerWidth;
    let ScHeight = window.innerHeight;
    let styleSh = document.styleSheets;
    let rowLength = 4;
    let sideBarWidth = "";
    let boxWidth = 0;
    let starHeight = (ScWidth * 0.86) / 33;
    if (ScWidth >= 1020) {
      boxWidth = (ScWidth * 0.86) / 4.2;
      sideBarWidth = `${(ScWidth * 0.1) / 2 + (ScWidth * 0.9) / 4.05}px`;
      rowLength = 4;
      styleSh[0].insertRule(
        `.row { width: ${ScWidth * 0.86}px;
                height: ${ScHeight / 3}px;}`,
        styleSh[0].rules.length
      );
      styleSh[0].insertRule(
        `.front { width: ${boxWidth}px;
                height: ${(ScHeight / 3) * 0.9}px;}`,
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
      styleSh[0].insertRule(
        `.start-button {width: ${(ScWidth * 0.86) / 2}px;}`,
        styleSh[0].rules.length
      );
      styleSh[0].insertRule(
        `.restart-button {width: ${(ScWidth * 0.86) / 20}px;}`,
        styleSh[0].rules.length
      );
      styleSh[0].insertRule(
        `.star {width: ${(ScWidth * 0.86) / 33}px;
                height: ${(ScWidth * 0.86) / 33}px}`,
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
    return {
      ScWidth,
      ScHeight,
      rowLength,
      sideBarWidth,
      boxWidth,
      starHeight,
    };
  };