'use strict';

let score = 20;
let highScore = 0;

//Generating a random number
const randomNumGen = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomNumGen();

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//Handling Click Events
//Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Check if Input field is empty after the check button has been clicked
  if (!guess) {
    // console.log(guess);
    displayMessage('⛔ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.transition = 'all 2s';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.transition = 'all 0.5s';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When  guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High' : '📉Too Low';

      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥💥💥💥You lost the game💥💥💥💥!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

///Game Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
