class Weapons {
  constructor() {}

  multiStrike() {
    for (let i = 0; i <= 4; i += 1) {
      var bullet = createSprite(
        ship.shipSpr.position.x,
        ship.shipSpr.position.y
      );
      bullet.addImage(pointattackImage);
      bullet.scale = 2;
      bullet.rotation = ship.shipSpr.rotation;
      bullet.setSpeed(10 + ship.shipSpr.getSpeed(), ship.shipSpr.rotation - 90);
      bullet.life = 50;
      bullets.add(bullet);
    }
  }

  standartStrike() {
    var bullet = createSprite(ship.shipSpr.position.x, ship.shipSpr.position.y);
    bullet.addImage(bulletImage);
    bullet.scale = 2;
    bullet.rotation = ship.shipSpr.rotation;
    bullet.setSpeed(10 + ship.shipSpr.getSpeed(), ship.shipSpr.rotation - 90);
    bullet.life = 50;
    bullets.add(bullet);
  }

  meteorStrike() {
    for (let i = 0; i <= 9; i += 1) {
      var bullet = createSprite(
        ship.shipSpr.position.x,
        ship.shipSpr.position.y
      );
      bullet.addImage(meteorImage);
      bullet.scale = 1.5;
      bullet.rotation = ship.shipSpr.rotation;
      bullet.setSpeed(10 + ship.shipSpr.getSpeed(), ship.shipSpr.rotation - 90);
      bullet.life = 50;
      bullets.add(bullet);
    }
  }

  xStrike() {
    for (let i = 0; i <= 360; i += 90) {
      for (let y = 0; y <= 5; y += 1) {
        var bullet = createSprite(
          ship.shipSpr.position.x,
          ship.shipSpr.position.y
        );
        bullet.addImage(xattack);
        bullet.scale = 1.5;
        bullet.rotation = ship.shipSpr.rotation + i;
        bullet.setSpeed(10 + ship.shipSpr.getSpeed(), bullet.rotation);
        bullet.life = 50;

        bullets.add(bullet);
      }
    }
  }
}
