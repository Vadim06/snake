const cvs = document.querySelector("canvas");
cvs.height = 400;
cvs.width = 400;
const ctx = cvs.getContext("2d");
let t = true;
let gm = new Game();
let snake = new Snake();
let food = new Food();
let bomb = new Bomb();
let game = () => {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  snake.moveSnake();
  if (t) {
    setTimeout(game, 100);
  }
};

game();
