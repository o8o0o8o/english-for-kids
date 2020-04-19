export function calcSizes() {
  const ScWidth = window.innerWidth;
  const ScHeight = window.innerHeight;
  const styleSh = document.styleSheets;
  let rowLength = 4;
  let sideBarWidth = '';
  let boxWidth = 0;
  const starHeight = (ScWidth * 0.86) / 33;
  if (ScWidth >= 800) {
    boxWidth = (ScWidth * 0.86) / 4.2;
    sideBarWidth = `${(ScWidth * 0.1) / 2 + (ScWidth * 0.9) / 4.05}px`;
    rowLength = 4;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.86}px;
                height: ${ScHeight / 2}px;
                justify-content: space-between;
                align-items: unset;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.front { width: ${boxWidth}px;
                height: ${(ScHeight / 3) * 0.9}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.side-bar {
                height: ${ScHeight}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.button-row {height: ${(ScHeight / 10) * 0.98}px;
        }`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.start-button {width: ${(ScWidth * 0.86) / 2}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.restart-button {width: ${(ScWidth * 0.86) / 20}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.star {width: ${(ScWidth * 0.86) / 33}px;
                height: ${(ScWidth * 0.86) / 33}px}`,
      styleSh[0].rules.length,
    );
  } else if (ScWidth < 800 && ScWidth >= 500) {
    rowLength = 2;
    boxWidth = (ScWidth * 0.86) / 2.2;
    sideBarWidth = `${(ScWidth * 0.1) / 2 + (ScWidth * 0.9) / 2.05}px`;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.86}px;
                height: ${ScHeight / 2}px;
                justify-content: space-between;
                align-items: unset;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.front { width: ${boxWidth}px;
                height: ${(ScHeight / 2) * 0.9}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.side-bar {
                height: ${ScHeight}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.button-row {height: ${(ScHeight / 6) * 0.98}px;
        }`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.start-button {width: ${(ScWidth * 0.86) / 2}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.restart-button {width: ${(ScWidth * 0.86) / 15}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.star {width: ${(ScWidth * 0.86) / 33}px;
                height: ${(ScWidth * 0.86) / 33}px}`,
      styleSh[0].rules.length,
    );
  } else if (ScWidth < 600) {
    rowLength = 1;
    boxWidth = (ScWidth * 0.86) / 1.5;
    sideBarWidth = `${(ScWidth * 0.1) / 2 + (ScWidth * 0.9) / 1.55}px`;
    styleSh[0].insertRule(
      `.row { width: ${ScWidth * 0.86}px;
                height: ${ScHeight / 3}px;
                justify-content: center;
                align-items: center;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.front { width: ${boxWidth}px;
                height: ${(ScHeight / 3) * 0.9}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.side-bar {
                height: ${ScHeight}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.button-row {height: ${(ScHeight / 10) * 0.98}px;
        justify-content: space-between;
        align-items: unset
      }`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.start-button {width: ${boxWidth}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.restart-button {width: ${(ScWidth * 0.86) / 5}px;}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.star {width: ${(ScWidth * 0.86) / 33}px;
                height: ${(ScWidth * 0.86) / 33}px}`,
      styleSh[0].rules.length,
    );
    styleSh[0].insertRule(
      `.start-button-row { justify-content: center;
        align-items: center; }`,
      styleSh[0].rules.length,
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
}
