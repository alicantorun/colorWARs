class Ship {
  constructor() {}

  setup() {
    this.shipImage = loadImage("assets/spaceship.png");
    this.shipSpr = createSprite(WIDTH / 2, HEIGHT / 2);
    this.shipSpr.setCollider("circle", 0, 0, 20);
    this.shipSpr.addImage("normal", shipImage);
    this.shipSpr.addAnimation(
      "thrust",
      "assets/spaceship001.png",
      "assets/spaceship002.png"
    );
  }

  isHit() {
    if (this.shipSpr.bounce(objects)) {
      health--;
      document.querySelector("#life").innerHTML = health;
    }
  }

  rotationControls() {
    if (keyDown(LEFT_ARROW)) {
      this.shipSpr.rotation -= 10;
    }
    if (keyDown(RIGHT_ARROW)) {
      this.shipSpr.rotation += 10;
    }
    if (keyDown(UP_ARROW)) {
      this.shipSpr.addSpeed(6, this.shipSpr.rotation);
      this.shipSpr.changeAnimation("thrust");
      this.shipSpr.position.x +=
        Math.sin((ship.shipSpr.rotation / 180) * PI) * this.shipSpr.getSpeed();
      this.shipSpr.position.y -=
        Math.cos((this.shipSpr.rotation / 180) * PI) * this.shipSpr.getSpeed();
    } else {
      this.shipSpr.changeAnimation("normal");
    }
    return;
  }

  keyPresses() {
    if (keyDown(RIGHT_ARROW)) {
      this.shipSpr.setSpeed(0, 0);
    } else if (keyDown(DOWN_ARROW)) {
      this.shipSpr.setSpeed(0, 90);
    } else if (keyDown(LEFT_ARROW)) {
      this.shipSpr.setSpeed(0, 180);
    } else if (keyDown(UP_ARROW)) {
      this.shipSpr.setSpeed(0, 270);
    } else if (keyWentDown("O")) {
      pointsCount += objects.length;
      console.log(objects.length);
      objects.removeSprites();
    }
    // else if (key == " ") {
    //   this.shipSpr.setSpeed(0, 0);
    // }
    // return false;
  }

  attacksControls() {
    if (LEVEL >= 0) {
      if (keyWentDown("c")) {
        weapons.standartStrike();
        laserSong.setVolume(0.2);
        laserSong.play();
      }
    }
    if (LEVEL >= 3) {
      if (keyWentDown("x")) {
        weapons.multiStrike();
      }
    }
    if (LEVEL >= 5) {
      if (keyWentDown("z")) {
        weapons.meteorStrike();
        rocketSound.setVolume(0.1);
        rocketSound.play();
      }
    }
    if (LEVEL >= 7) {
      if (keyWentDown("v")) {
        weapons.xStrike();
      }
    }
  }

  // if (keyDown(LEFT_ARROW)) {
  //   ship.rotation -= 10;
  // }
  // if (keyDown(RIGHT_ARROW)) ship.rotation += 10;
  // if (keyDown(UP_ARROW)) {
  //   ship.addSpeed(7, ship.rotation);
  //   ship.changeAnimation("thrust");

  //   // min fixed here for angle/ radian my vers (ship.rotation) => ship.rotation / 180 * PI
  //   ship.position.x += Math.sin((ship.rotation / 180) * PI) * ship.getSpeed();
  //   ship.position.y -= Math.cos((ship.rotation / 180) * PI) * ship.getSpeed();
  // } else ship.changeAnimation("normal");
}
