class Food {
  block = new Block(10, 10);
  drawFood() {
    this.block.drawFoodBlock();
  }
  moveFood() {
    this.block.column = Math.round(Math.random() * 39);
    this.block.row = Math.round(Math.random() * 39);
    this.drawFood();
  }
  getRandomInt(max) {
    return Math.ceil(Math.random() * (max - 1));
  }
}
