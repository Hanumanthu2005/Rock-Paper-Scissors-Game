let score = JSON.parse(localStorage.getItem('score')) || {
    win : 0, 
    lose : 0,
    tie : 0
};

function updateScore() {
  document.querySelector('.score-card')
    .innerHTML = `win : ${score.win} lose : ${score.lose} tie : ${score.tie}`;
}

updateScore();

function playGame(playerMove) {

  const choice = pickRandomChoice();
  let result = '';

  if(playerMove === choice) {
    result = 'Tie';
    score.tie++;
  } else {
    if(playerMove === 'scissors') {
      if (choice === 'rock') {
        result = 'You lose';
        score.lose++;
      } else if (choice === 'paper') {
        result = 'You win'
        score.win++;
      }
    } 
    
    else if (playerMove === 'paper') {
      if (choice === 'rock') {
        result = 'You win';
        score.win++;
      } else if (choice === 'scissors') {
        result = 'You lose';
        score.lose++;
      } 
    } 
    
    else if (playerMove === 'rock') {
      if (choice === 'scissors') {
        result = 'You win';
        score.win++;
      } else if (choice === 'paper') {
        result = 'You lose'
        score.lose++;
      }
    }
  }
  
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.game-result')
    .innerHTML = result;

  document.querySelector('.game-moves')
    .innerHTML = `You 
    <img class="move-emoji" src="emoji/${playerMove}-emoji.png" alt="">
    <img class="move-emoji" src="emoji/${choice}-emoji.png" alt="">
    Computer`;

  updateScore();

  
}

function pickRandomChoice() {
  let choice = '';
  const randomVal = Math.random();
  if(randomVal >= 0 && randomVal < 1/3) {
    choice = 'rock';
  } else if (randomVal >= 1 / 3 && randomVal < 2 / 3) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }
  return choice;
}