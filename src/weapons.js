class Weapons {
  constructor() {}

  multiStrike() {
    var bullet = createSprite(ship.shipSpr.position.x, ship.shipSpr.position.y);
    bullet.addImage(pointattackImage);
    bullet.scale = 2;
    bullet.rotation = ship.shipSpr.rotation;
    bullet.setSpeed(10 + ship.shipSpr.getSpeed(), ship.shipSpr.rotation - 90);
    bullet.life = 50;
    bullets.add(bullet);
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
    var bullet = createSprite(ship.shipSpr.position.x, ship.shipSpr.position.y);
    bullet.addImage(meteorImage);
    bullet.scale = 1.5;
    bullet.rotation = ship.shipSpr.rotation;
    bullet.setSpeed(10 + ship.shipSpr.getSpeed(), ship.shipSpr.rotation - 90);
    bullet.life = 50;
    bullets.add(bullet);
  }

  xStrike() {
    for (let i = 0; i <= 360; i += 90) {
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
      console.log("hey");
    }
  }
}
