const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 

function playGame(playerMove) {
  let result = '';

  const computerMove= pickComputerMove();

  if (playerMove === computerMove) {
    result = 'Tie';
  } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
    result = 'You win';
  } else {
    result = 'You lose';
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = `${result}.`; 
  document.querySelector('.js-moves').innerHTML = `You<img src="assets/${playerMove}-emoji.png" class="move-icon"><img src="assets/${computerMove}-emoji.png" class="move-icon">Computer`;
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}

function pickComputerMove() {

  let computerMove = '';

  const randomNumber = Math.floor(Math.random()*3);
  const choices = ['rock', 'paper', 'scissors'];
  computerMove = choices[randomNumber];

  return computerMove;
}
