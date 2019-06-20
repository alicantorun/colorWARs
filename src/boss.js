class Boss {
  constructor() {}

  setup() {}

  createBoss(xPosBoss, yPosBoss) {
    if (boss_state === false) {
      this.bossSpr = createSprite(
        200 + sin(xPosBoss) * 100,
        200 + sin(yPosBoss) * 100
      );
      var img = loadImage("assets/boss" + ".png");
      this.bossSpr.addImage(img);
      // this.bossSpr.setSpeed(2.5, random(360));
      // this.bossSpr.rotationSpeed = 1;
      //a.debug = true;
      this.bossSpr.scale = 0.3;
      this.bossSpr.mass = 2 + this.bossSpr.scale;
      this.bossSpr.setDefaultCollider();
      objects.add(this.bossSpr);
      boss_state = true;
      game_state = false;
      return a;
    }
  }

  bossMovement() {
    boss.bossSpr.position.x = 600 * cos(xPosBoss) + 600;
    boss.bossSpr.position.y = 450 * cos(yPosBoss) + 450;

    xPosBoss += random(0.01, 0.015);
    yPosBoss += random(0.02, 0.025);

    if (frameCount % 30 === 0) {
      boss.bossSpr.scale += 0.02;
    }
  }

  bossStrike() {
    for (let i = 0; i <= 360; i += 90) {
      for (let y = 0; y <= 5; y += 1) {
        var bullet = createSprite(
          boss.bossSpr.position.x,
          boss.bossSpr.position.y
        );
        bossAttackImg.scale = 0.25;
        bullet.addImage(bossAttackImg);
        bullet.scale = 1.5;
        bullet.rotation = boss.bossSpr.rotation + i;
        bullet.setSpeed(10 + boss.bossSpr.getSpeed(), bullet.rotation);
        bullet.life = 100;

        bullets.add(bullet);
      }
    }
  }
}
