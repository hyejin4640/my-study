'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  // player에 최종 점수를 저장하는 배열
  currentScore = 0;
  // roll을 클릭할동안 쌓이는 점수를 저장할변수
  activePlayer = 0;
  // player0,player1의 순서를 바꿀때 player의 id의 숫자를 담은 변수
  playing = true;
// 둘중 한명이 100점에 도달하면 flase로 바뀐다 즉, 게임의 종료여부를 담은 변수
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // roll 을 할동안 저장되는값을 0으로 바꾼다
  currentScore = 0;
  // 변수에도 0을 저장
  activePlayer = activePlayer === 0 ? 1 : 0;
  // 일단 처음 시작할대는 값이0즉 player0 이먼저 시작하니까 ,그런후 hold를 누르거나
  // dice가 1이 나오면 그동안 저장된값도 0이되고 다음 player1 로 순서가넘어가야하니까
  // activeplayer에 0이면 1을 대입하고 0이 아니면 0을 대입해라 라는 명령문이실행된다.
  player0El.classList.toggle('player--active');
  // player0 ,player1에 클래스가 없으면 추가 있으면 삭제
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1 
          // 주사위가1이나오면 상대편으로 넘어가고 그전에 쌓아논점수는 0이됨.
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) { //playing이 true이니까 게임을 계속 진행한다. (저장한다)
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false; /* 게임종료 */
      diceEl.classList.add('hidden'); /* 주시위 안보이게 */

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
