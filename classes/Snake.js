class Snake {
  blocks = [new Block(5, 5), new Block(6, 5), new Block(7, 5)];
  head = this.blocks[this.blocks.length - 1];
  direction = "right";
  newDir = "right";
  drawSnake() {
    this.blocks.forEach((block) => {
      block.drawSnakeBlock();
    });
  }
  moveSnake() {
    food.drawFood();
    bomb.drawBomb();
    this.hitCheck();
    this.selfHitCheck();
    this.setDirection();
    this.dirCheck();
    this.direction = this.newDir;
    if (this.direction === "right") {
      this.blocks.push(new Block(this.head.column + 1, this.head.row));
    }
    if (this.direction === "left") {
      this.blocks.push(new Block(this.head.column - 1, this.head.row));
    }
    if (this.direction === "up") {
      this.blocks.push(new Block(this.head.column, this.head.row - 1));
    }
    if (this.direction === "down") {
      this.blocks.push(new Block(this.head.column, this.head.row + 1));
    }
    if (this.collisionCheck(food.block)) {
      food.moveFood();
    } else {
      this.blocks.shift();
    }
    if (this.collisionCheck(bomb.block)) {
      bomb.moveBomb();
      if (this.blocks.length > 3) {
        this.blocks.shift();
      }
    }
    this.head = this.blocks[this.blocks.length - 1];
    this.drawSnake();
    this.selfHitCheck();
  }
  setDirection() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.newDir = "right";
      }
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.newDir = "left";
      }
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.newDir = "up";
      }
      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.newDir = "down";
      }
    });
  }
  dirCheck() {
    if (
      (this.direction == "right" && this.newDir == "left") ||
      (this.direction == "left" && this.newDir == "right") ||
      (this.direction == "up" && this.newDir == "down") ||
      (this.direction == "down" && this.newDir == "up")
    ) {
      this.newDir = this.direction;
    }
  }
  selfHitCheck() {
    for (let i = 0; i < this.blocks.length - 1; i++) {
      if (this.collisionCheck(this.blocks[i])) {
        gm.stopGame();
      }
    }
  }
  hitCheck() {
    if (
      this.head.column >= gm.colsInRow ||
      this.head.column <= 0 ||
      this.head.row >= gm.rowsInCol ||
      this.head.row <= 0
    ) {
      gm.stopGame();
    }
  }
  collisionCheck(block) {
    return this.head.column == block.column && this.head.row == block.row;
  }
}
