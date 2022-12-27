class Game {
  colsInRow = 40;
  rowsInCol = 40;
  blockWidth = cvs.width / this.colsInRow;
  blockHeight = cvs.width / this.rowsInCol;
  stopGame() {
    t = false;
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgb(0 0 0 /50%)'
    ctx.fillText("GAME OVER", cvs.width / 2, cvs.height / 2);
  }
}
