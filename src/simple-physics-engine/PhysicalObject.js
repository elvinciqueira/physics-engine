class PhysicalObject {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;

    this.width = w;
    this.height = h;

    this.xVel = 0.1;
    this.yVel = 0.1;
  }

  addXVel(vel) {
    this.xVel += vel;
  }

  addYVel(vel) {
    this.yVel += vel;
  }

  nextFrame() {
    this.x += this.xVel;
    this.y += this.yVel;
  }
}