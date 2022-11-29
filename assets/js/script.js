const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const audioJump = document.querySelector("#audio-jump");
const audioDeath = document.querySelector("#audio-death");
const gameOverImg = document.querySelector("#imagemGameOver");
const restartBtn = document.querySelector("#restartBtn");
const score = document.querySelector("#score");

let scoreCounter = 0;

const jump = () => {
  mario.classList.add("jump");
  audioJump.play();
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const restartGame = () =>
  restartBtn.addEventListener(
    "click",
    () => (window.location = window.location.href)
  );

const activeGameOverAudiosEffects = () => {
  audioDeath.play();
  audioJump.setAttribute("src", "");
};

const counterFinalScore = () => {
  scoreCounter++;
  score.textContent = `Score: ${(scoreCounter / 100).toFixed(0)}`;
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    activeGameOverAudiosEffects();

    gameOverImg.style.display = "block";

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.setAttribute("src", "assets/images/game-over.png");

    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }

  counterFinalScore();
}, 10);

restartGame();

document.addEventListener("keydown", jump);
document.addEventListener("mousedown", jump);
