const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const winningScoreSelect = document.querySelector("#playTo");
const resetButton = document.querySelector('#reset');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if(!isGameOver){
    player.score += 1;

    if(player.score === winningScore){
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }

    player.display.innerHTML = player.score;
  }
}

function reset () {
  p1.score = 0;
  p2.score = 0;
  isGameOver = false;
  p1.display.innerHTML = '0';
  p2.display.innerHTML = '0';
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
}

winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

p1.button.addEventListener('click', ()=> {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', ()=> {
  updateScores(p2, p1);
})

resetButton.addEventListener('click', reset)

