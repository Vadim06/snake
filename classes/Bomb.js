class Bomb {
  block = new Block(20, 20);
  drawBomb() {
    this.block.drawBombBlock();
  }
  moveBomb() {
    this.block.column = Math.round(Math.random() * 39);
    this.block.row = Math.round(Math.random() * 39);
    this.drawBomb();
  }
  getRandomInt(max) {
    return Math.ceil(Math.random() * (max - 1));
  }
}
