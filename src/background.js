class Background {
  constructor() {
    this.y = -HEIGHT;
    this.yReversed = 0;
    this.startY = 0;
  }

  setup() {
    this.bg_image = loadImage("assets/background_rotated_1.jpg");

    this.bg_image_0 = loadImage("assets/background_rotated_1.jpg");
    this.bg_image_1 = loadImage("assets/background_rotated_1.jpg");
    this.bg_image_2 = loadImage("assets/background_rotated_2.jpg");
  }

  draw() {
    image(this.bg_image, 0, this.startY, WIDTH, HEIGHT);
    this.startY += 5;

    image(this.bg_image, 0, this.y, WIDTH, HEIGHT);
    image(this.bg_image, 0, this.yReversed, WIDTH, HEIGHT);

    image(this.bg_image_0, 0, this.y, WIDTH, HEIGHT);
    image(this.bg_image_0, 0, this.yReversed, WIDTH, HEIGHT);

    if (this.y >= HEIGHT) {
      this.y = 0;
    }

    if (this.y1 >= HEIGHT) {
      this.y1 = 0;
    }

    if (this.yReversed >= 0) {
      this.yReversed = -HEIGHT;
    }

    this.y += 5;
    this.yReversed += 5;
  }
}
