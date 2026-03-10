const maxGoals = 5;
let goals = 0;
const display =
document.getElementById("goal-display");
const scoreBtn =
document.getElementById("score-btn");
const resetBtn =
document.getElementById("reset-btn");
const celebration =
document.getElementById("celebration");
const history =
document.getElementById("history");
const goalSound = 
document.getElementById("goal-sound");
let seconds = 0;
const timerDisplay = 
document.getElementById("timer");
const startBtn = 
document.getElementById("start-btn");
startBtn.onclick = function(){
  setInterval(function(){
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(secs < 10){
      secs = "0" + secs;
    }
    timerDisplay.textContent = "Time: " + minutes + ":" + secs;
  },1000);
};

scoreBtn.onclick = function(){
  if(goals >= maxGoals){
    celebration.textContent = "🏆 Match Finished!";
    return;
  }
  goals = goals + 1;
  display.textContent = "Goals: " + goals;
  celebration.textContent = "⚽ GOOOOAAAL!! 🔥";
  goalSound.play();
  let item = document.createElement("li");
  item.textContent = "Goal number " + goals;
  history.appendChild(item);
};
resetBtn.onclick = function(){
  goals = 0;
  display.textContent = "Goals:" + goals;
};


