class Block {
  column;
  row;
  constructor(column, row) {
    this.column = column;
    this.row = row;
  }
  drawSnakeBlock() {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.column * gm.blockWidth,
      this.row * gm.blockHeight,
      gm.blockWidth,
      gm.blockHeight
    );
  }
  drawFoodBlock() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(
      this.column * gm.blockWidth + 0.5 * gm.blockWidth,
      this.row * gm.blockHeight + 0.5 * gm.blockHeight,
      0.5 * gm.blockWidth,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
  drawBombBlock() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(
      this.column * gm.blockWidth + 0.5 * gm.blockWidth,
      this.row * gm.blockHeight + 0.5 * gm.blockHeight,
      0.5 * gm.blockWidth,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
