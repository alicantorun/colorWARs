// class Background {
//   constructor() {
//     this.x = WIDTH;
//     this.xReversed = 0;
//   }

//   setup() {
//     this.bg_image = loadImage("assets/background_rotated.jpg");
//   }

//   draw() {
//     image(this.bg_image, this.x, 0, WIDTH, HEIGHT);
//     image(this.bg_image, this.xReversed, 0, WIDTH, HEIGHT);

//     if (this.x <= -WIDTH) {
//       this.x = WIDTH;
//     }

//     if (this.xReversed <= -WIDTH) {
//       this.xReversed = WIDTH;
//     }

//     this.x -= 3;
//     this.xReversed -= 3;
//   }
// }

class Background {
  constructor() {
    this.y = HEIGHT;
    this.yReversed = 0;
  }

  setup() {
    this.bg_image = loadImage("assets/background_rotated.jpg");
  }

  draw() {
    image(this.bg_image, 0, this.y, WIDTH, HEIGHT);
    image(this.bg_image, 0, this.yReversed, WIDTH, HEIGHT);

    if (this.y <= -HEIGHT) {
      this.y = HEIGHT;
    }

    if (this.yReversed <= -HEIGHT) {
      this.yReversed = HEIGHT;
    }

    this.y -= 3;
    this.yReversed -= 3;
  }
}
