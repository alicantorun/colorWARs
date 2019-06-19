class Boss {
  constructor(bossSpr) {
    this.bossSpr = bossSpr;
  }

  createBoss(type, x, y) {
    if (boss_state === false) {
      var a = createSprite(x, y);
      var img = loadImage("assets/boss" + ".png");
      a.addImage(img);
      a.setSpeed(2.5, random(360));
      a.rotationSpeed = 1;
      //a.debug = true;
      a.type = type;
      a.scale = 0.3;
      a.mass = 2 + a.scale;
      a.setDefaultCollider();
      objects.add(a);
      boss_state = true;
      game_state = false;
      return a;
    }
  }
}
