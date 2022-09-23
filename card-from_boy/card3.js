let ColorArray = ["red", "orange", "yellow", "green", "skyblue", "blue", "pink", "purple", "brown"];
let showColor = [];

ShowCard = () => {
  ColorArray.sort(() => Math.random() - 0.5);
  let NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  NumberArray.sort(() => Math.random() - 0.5);
  let tagCard;

  setTimeout(() => {
    tagCard = document.querySelector(`.card${NumberArray[0]} > p`);
    tagCard.style.opacity = 1;
    showColor.push(tagCard.style.backgroundColor);
  }, 0)

  setTimeout(() => {
    tagCard.style.opacity = 0;
    tagCard = document.querySelector(`.card${NumberArray[1]} > p`);
    tagCard.style.opacity = 1;
    showColor.push(tagCard.style.backgroundColor);
  }, 1000)

  setTimeout(() => {
    tagCard.style.opacity = 0;
    tagCard = document.querySelector(`.card${NumberArray[2]} > p`);
    tagCard.style.opacity = 1;
    showColor.push(tagCard.style.backgroundColor);
  }, 2000)

  setTimeout(() => {
    tagCard.style.opacity = 0;
    tagCard = document.querySelector(`.card${NumberArray[3]} > p`);
    tagCard.style.opacity = 1;
    showColor.push(tagCard.style.backgroundColor);
  }, 3000)

  setTimeout(() => {
    tagCard.style.opacity = 0;
    tagCard = document.querySelector(`.card${NumberArray[4]} > p`);
    tagCard.style.opacity = 1;
    showColor.push(tagCard.style.backgroundColor);
  }, 4000)

  setTimeout(() => {
    tagCard.style.opacity = 0;
  }, 5000)

  setTimeout(() => {
    for (i = 0; i < 9; i++) {
      document.querySelectorAll("button > p")[i].style.opacity = 1;
    }

    for (let i = 0; i < 5; i++) {
      console.log(showColor[i]);
    }
  }, 6000)
}


Result = () => {
  const input = document.querySelectorAll("input");

  for (let i = 0; i < 5; i++) {
    if (input[i].style.backgroundColor != showColor[i]) {
      input[i].value = "X";
    }
    else {
      input[i].value = "O";
    }
  }
}


init = () => {
  const start = document.querySelector(".start");
  const button = document.querySelectorAll("button > p");
  const result = document.querySelector(".result");
  const input = document.querySelectorAll("input");

  for (let i = 0; i < 9; i++) {
    button[i].style.opacity = 0;
    button[i].style.backgroundColor = ColorArray[i];

    button[i].addEventListener("click", () => {
      for (let j = 0; j < 5; j++) {
        if (input[j].style.backgroundColor == "") {
          input[j].style.backgroundColor = button[i].style.backgroundColor;
          break;
        }
      }
    })
  }

  start.addEventListener("click", () => {
    ShowCard();
  })

  result.addEventListener("click", () => {
    Result();
  })
}

init();