class Obstacles {
  constructor() {
    this.startCircle = 0;
    this.endCircle = WIDTH;
  }

  create() {}

  draw() {
    noFill();
    stroke(255);
    strokeWeight(8);
    ellipse(this.startCircle, 150, 45, 45);
    ellipse(this.endCircle, 250, 45, 45);

    this.startCircle = this.startCircle + 1;
    this.endCircle = this.endCircle - 1;
  }
}
