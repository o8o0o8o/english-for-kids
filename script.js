const cards = [
  [
    "Action (set A)",
    "Action (set B)",
    "Animal (set A)",
    "Animal (set B)",
    "Clothes",
    "Emotions",
  ],
  [
    {
      word: "cry",
      translation: "плакать",
      image: "img/cry.jpg",
      audioSrc: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "танцевать",
      image: "img/dance.jpg",
      audioSrc: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "нырять",
      image: "img/dive.jpg",
      audioSrc: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "рисовать",
      image: "img/draw.jpg",
      audioSrc: "audio/draw.mp3",
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      image: "img/fish.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      image: "img/fly.jpg",
      audioSrc: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      image: "img/hug.jpg",
      audioSrc: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      image: "img/jump.jpg",
      audioSrc: "audio/jump.mp3",
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      image: "img/open.jpg",
      audioSrc: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "играть",
      image: "img/play.jpg",
      audioSrc: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "указывать",
      image: "img/point.jpg",
      audioSrc: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ездить",
      image: "img/ride.jpg",
      audioSrc: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      image: "img/run.jpg",
      audioSrc: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      image: "img/sing.jpg",
      audioSrc: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "пропускать, прыгать",
      image: "img/skip.jpg",
      audioSrc: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      image: "img/swim.jpg",
      audioSrc: "audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: "img/cat.jpg",
      audioSrc: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "цыплёнок",
      image: "img/chick.jpg",
      audioSrc: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      image: "img/chicken.jpg",
      audioSrc: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      image: "img/dog.jpg",
      audioSrc: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      image: "img/horse.jpg",
      audioSrc: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "свинья",
      image: "img/pig.jpg",
      audioSrc: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "кролик",
      image: "img/rabbit.jpg",
      audioSrc: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "овца",
      image: "img/sheep.jpg",
      audioSrc: "audio/sheep.mp3",
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      image: "img/bird.jpg",
      audioSrc: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "рыба",
      image: "img/fish1.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "жаба",
      image: "img/frog.jpg",
      audioSrc: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "жирафа",
      image: "img/giraffe.jpg",
      audioSrc: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      image: "img/lion.jpg",
      audioSrc: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "мышь",
      image: "img/mouse.jpg",
      audioSrc: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "черепаха",
      image: "img/turtle.jpg",
      audioSrc: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: "img/dolphin.jpg",
      audioSrc: "audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      image: "img/skirt.jpg",
      audioSrc: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      image: "img/pants.jpg",
      audioSrc: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      image: "img/blouse.jpg",
      audioSrc: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      image: "img/dress.jpg",
      audioSrc: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      image: "img/boot.jpg",
      audioSrc: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: "img/shirt.jpg",
      audioSrc: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      image: "img/coat.jpg",
      audioSrc: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      image: "img/shoe.jpg",
      audioSrc: "audio/shoe.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: "img/sad.jpg",
      audioSrc: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "img/angry.jpg",
      audioSrc: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "img/happy.jpg",
      audioSrc: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "img/tired.jpg",
      audioSrc: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "img/surprised.jpg",
      audioSrc: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "img/scared.jpg",
      audioSrc: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "img/smile.jpg",
      audioSrc: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      image: "img/laugh.jpg",
      audioSrc: "audio/laugh.mp3",
    },
  ],
  ////////////////////////////////////////////////////
  [
    {
      word: "skirt",
      translation: "юбка",
      image: "img/skirt.jpg",
      audioSrc: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      image: "img/pants.jpg",
      audioSrc: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      image: "img/blouse.jpg",
      audioSrc: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      image: "img/dress.jpg",
      audioSrc: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      image: "img/boot.jpg",
      audioSrc: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: "img/shirt.jpg",
      audioSrc: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      image: "img/coat.jpg",
      audioSrc: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      image: "img/shoe.jpg",
      audioSrc: "audio/shoe.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: "img/sad.jpg",
      audioSrc: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "img/angry.jpg",
      audioSrc: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "img/happy.jpg",
      audioSrc: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "img/tired.jpg",
      audioSrc: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "img/surprised.jpg",
      audioSrc: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "img/scared.jpg",
      audioSrc: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "img/smile.jpg",
      audioSrc: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      image: "img/laugh.jpg",
      audioSrc: "audio/laugh.mp3",
    },
  ],
];

let sergeantState = (function () {
  let state = false;
  function change(st) {
    state = !state;
  }
  return {
    toggle: function () {
      change(true);
    },
    get: function () {
      return state;
    },
  };
})();

document.body = document.createElement("body");
document.body.id = "main";
const main = document.getElementById("main");
main.onload = chiefCommander();
//main.resize = renderBoard();

function drawCaptain() {
  let { ScWidth, ScHeight, rowLength, sideBarWidth } = privateSize();
  let boxes = [];
  let cardIndex = 0;
  const boxesContainer = document.getElementById("boxes-container");
  boxesContainer.innerHTML = "";
  for (let j = 0; j < 8 / rowLength; j += 1) {
    boxes[j] = [];
    for (let i = 0; i < rowLength; i += 1) {
      let CardContainer = document.createElement("div");
      let CardSuit = document.createElement("div");
      let ImageCircle = document.createElement("div");
      let stripe = document.createElement("div");
      let stripe1 = document.createElement("div");
      let stripeSet = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", `${cards[1 + cardIndex][0].image}`);
      CardContainer.setAttribute("data", `${cards[0][cardIndex]}`);
      stripe1.innerText = cards[0][cardIndex];
      CardContainer.id = `${cardIndex}`;
      CardContainer.onclick = function (e) {
        let category = +e.target.classList[1];
        majorPaint(category, rowLength);
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
      stripeSet.classList.add("front");
      stripe.classList.add("suit-stripe");
      if (sergeantState.get()) {
        stripe.classList.add('play-side-bar');
      } else {
        stripe.classList.remove('play-side-bar');
      };           
      img.classList.add("img");
      CardSuit.classList.add("front");
      ImageCircle.classList.add("image-circle");
      stripe1.classList.add("suit-stripe-caption");
      CardContainer.classList.add("front");
      CardContainer.classList.add("glow-on-hover");      
      CardSuit.classList.add(`${cardIndex}`);
      ImageCircle.classList.add(`${cardIndex}`);
      stripeSet.classList.add(`${cardIndex}`);
      img.classList.add(`${cardIndex}`);
      stripe.classList.add(`${cardIndex}`);
      stripe1.classList.add(`${cardIndex++}`);
      boxes[j].push(CardContainer);
    }
  }
  boxes.forEach((a) => {
    const row = document.createElement("div");
    row.classList.add("row");
    boxesContainer.appendChild(row);
    a.forEach((b) => {
      row.appendChild(b);
    });
  });
}

function privateSize() {
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
      `.front { width: ${(ScWidth * 0.86) / 4.2}px;
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
  };
}

function majorPaint(category, rowLength) {
  const boxesContainer = document.getElementById("boxes-container");
  boxesContainer.innerHTML = "";
  let boxes = [];
  let cardIndex = 0;
  for (let j = 0; j < 8 / rowLength; j += 1) {
    boxes[j] = [];
    for (let i = 0; i < rowLength; i += 1) {
      let Flip = document.createElement("div");
      let FlipInner = document.createElement("div");
      let FlipFront = document.createElement("div");
      let FrontBase = document.createElement("div");
      let imageContainer = document.createElement("div");
      let img = document.createElement("img");
      let stripeSet = document.createElement("div");
      let stripe1 = document.createElement("div");
      let button = document.createElement("button");
      let buttonCaption = document.createElement("div");
      let FlipBack = document.createElement("div");
      let FlipBackBase = document.createElement("div");
      console.log(category, cardIndex)
      if (!sergeantState.get()) {
        let audio = new Audio(`${cards[1 + category][cardIndex].audioSrc}`);
        Flip.onclick = function () {
          audio.play();
        };
      }      
      buttonCaption.innerHTML = "\u27f3";
      FlipBackBase.innerText = cards[1 + category][cardIndex].translation;
      Flip.setAttribute("data", `${cards[0][cardIndex]}`);
      img.setAttribute("src", `${cards[1 + category][cardIndex].image}`);
      stripe1.innerText = cards[1 + category][cardIndex].word;
      Flip.id = `${cardIndex}`;      
      button.onclick = function () {
        FlipInner.classList.add("flipper");
      };
      Flip.onmouseleave = function () {
        FlipInner.classList.remove("flipper");
      };
      stripeSet.appendChild(stripe1);
      FrontBase.appendChild(stripeSet);
      button.appendChild(buttonCaption);
      FlipBack.appendChild(FlipBackBase);
      FlipFront.appendChild(FrontBase);
      imageContainer.appendChild(img);
      FrontBase.appendChild(imageContainer);
      FlipInner.appendChild(FlipFront);
      FlipInner.appendChild(FlipBack);
      Flip.appendChild(FlipInner);
      stripe1.appendChild(button);
      stripeSet.classList.add("stripe-set");
      if (!sergeantState.get()) {
        stripeSet.classList.remove("hidden");
      } else {
        stripeSet.classList.add("hidden");
      };      
      FlipInner.classList.add('front');
      buttonCaption.classList.add("button-caption");
      button.classList.add("flip-button");
      button.classList.add("rotate-scale-down");
      img.classList.add("front");
      stripe1.classList.add("card-stripe-caption");
      FrontBase.classList.add("front");
      Flip.classList.add("front");
      Flip.classList.add("jello-horizontal");
      Flip.classList.add("flip-card");
      FlipInner.classList.add("flip-card-inner");
      FlipFront.classList.add("flip-card-front");
      FlipBack.classList.add("flip-card-back");
      FlipBackBase.classList.add("back-base");
      boxes[j].push(Flip);
      cardIndex++;
    }
  }
  let start = document.createElement("button");
  start.classList.add("start-button");
  let startCaption = document.createElement("div");
  startCaption.innerHTML = "Start game";
  startCaption.classList.add("start-caption");
  if (sergeantState.get()) {
    start.classList.remove("hidden");
  } else {
    start.classList.add("hidden");
  }
  start.appendChild(startCaption);
  boxes.push([start]);
  boxes.forEach((a, i, arr) => {
    const row = document.createElement("div");
    row.classList.add("row");
    if (i < arr.length - 1) {
      boxesContainer.appendChild(row);
      a.forEach((b) => {
        row.appendChild(b);
      });
    } else {
      console.log('start')
      const anotherRow = document.createElement("div");
      anotherRow.classList.add("button-row");
      anotherRow.classList.add("start-button-row");    
      boxesContainer.appendChild(anotherRow);
      a.forEach((b) => {
        anotherRow.appendChild(b);
      });
    }
  });

  return boxes;
}

function renderGeneral() {
  let { ScWidth, ScHeight, rowLength, sideBarWidth } = privateSize();
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
  const sideBar = document.createElement("div");
  const boxesContainer = document.createElement("div");
  boxesContainer.id = "boxes-container";
  let sideBarOpen = false;
  switchBtnWr.classList.add("switch-wrapper");
  playStateBtn.classList.add("slider-button-caption");
  trainStateBtn.classList.add("slider-button-caption");
  sliderRow.classList.add("slider-row");  
  if (sergeantState.get()) {
    playStateBtn.classList.remove("hidden");
    trainStateBtn.classList.add('hidden');
  } else {
    trainStateBtn.classList.remove('hidden');
    playStateBtn.classList.add("hidden");
  }; 
  switchBtn.classList.add("switch");
  sliderBtn.classList.add("slider");
  burgerStripesColumn.classList.add("burger-stripes");
  burgerBtn.classList.add("burger-button");
  sideBar.classList.add("side-bar");
  buttonRow.classList.add("row");
  buttonRow.classList.add("button-row"); 
  sideBarMenu.classList.add("hidden");
  sideBarMenu.classList.add("side-bar-menu");
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
      sideBarMenu.classList.add("hidden");
      burgerBtn.classList.toggle("turn");
    } else {
      sideBar.style.width = sideBarWidth;
      sideBarOpen = true;
      sideBarMenu.classList.remove("hidden");
      burgerBtn.classList.toggle("turn");
    }
  };
  main.onmouseup = function (e) {
    if (
      sideBarOpen &&
      sideBar.clientWidth === +sideBarWidth.match(/(\d)*(?=\.)/)[0]
    ) {
      sideBar.style.width = 0;
      sideBarOpen = false;
      sideBarMenu.classList.add("hidden");
      burgerBtn.classList.toggle("turn");
    }
  };
  checkbox.setAttribute("type", "checkbox");
  playStateBtn.innerText = "play";
  trainStateBtn.innerText = "train";
  let stripes = [];
  for (let i = 0; i < 3; i += 1) {
    const stripe = document.createElement("div");
    stripe.classList.add("burger-stripe");
    stripes.push(stripe);
  }
  switchBtn.onmouseup = function () {
    sergeantState.toggle(true);
    playStateBtn.classList.toggle("hidden");
    trainStateBtn.classList.toggle("hidden");
    sideBar.classList.toggle("play-side-bar");
    let start = document.getElementsByClassName("start-button")[0];
    if (start) {
      start.classList.toggle("hidden");
    }    
    let arrOfStripes = Array.from(
      document.getElementsByClassName("suit-stripe")
    );
    arrOfStripes.forEach((a) => a.classList.toggle("play-side-bar"));
    let arrOfSetOfStripes = Array.from(
      document.getElementsByClassName("stripe-set")
    );
    arrOfSetOfStripes.forEach((a) => a.classList.toggle("hidden"));    
    let arrOfCards = Array.from(document.getElementsByClassName("flip-card"));
    arrOfCards.forEach((a) => a.classList.toggle("wobble-hor-bottom"));
    if (!sergeantState.get()) {
      let category = +document.getElementsByClassName("indentation")[0]
        .classList[0];
        if (category !== -1) {
          majorPaint(category, rowLength);
        }            
    } else {    
         console.log('hre')
      arrOfCards.forEach((a) => (a.onclick = null));
    };    
    setTimeout(() => {
      let arrOfCards = Array.from(document.getElementsByClassName("flip-card"));
      arrOfCards.forEach((a) => a.classList.toggle("wobble-hor-bottom"));
    }, 800);
  };  
  let mainWindow = document.createElement("div");
  mainWindow.classList.add("-1");
  mainWindow.classList.add("burger-menu-item");
  mainWindow.classList.add('indentation');
  mainWindow.id = "-1";
  mainWindow.innerText = "Main Window";
  sideBarMenu.appendChild(mainWindow);
  cards[0].forEach((a, i) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add(i);
    menuItem.classList.add("burger-menu-item");
    menuItem.id = i;
    menuItem.innerText = a;   
    sideBarMenu.appendChild(menuItem);
  });
  main.onclick = function(e) {
    let id = +e.target.classList[0];  
    console.log(id)  
      if (typeof id === 'number' && id === id) {
        let arrMenuItems = Array.from(document.getElementsByClassName("burger-menu-item"));      
        arrMenuItems.forEach((a) => a.classList.remove("indentation"));
        document.getElementById(id).classList.add("indentation");
        console.log(document.getElementById(id))
        switch (id) {
          case -1:
            drawCaptain();
            break;
          default:
            majorPaint(id, rowLength);
            break;
        };
      }      
  };
  stripes.forEach((a) => {
    burgerStripesColumn.appendChild(a);
  });
};

function chiefCommander() {
  renderGeneral();
  drawCaptain();
}
