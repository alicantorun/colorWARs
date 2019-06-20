class ObjectEngine {
  constructor() {}

  objectCreator() {
    for (var i = 0; i < allSprites.length; i++) {
      var s = allSprites[i];
      if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
      if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
      if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
      if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
    }

    for (var i = 0; i <= LEVEL / 2; i++) {
      var ang = random(360);
      var px = width / 2 + 1000 * cos(radians(ang));
      var py = height / 2 + 1000 * sin(radians(ang));
      if (game_state === true) {
        if (LEVEL >= 1) {
          floatingobjects.createRoundObject(1, px, py);
        }

        if (LEVEL >= 3) {
          floatingobjects.createSquareObject(1, px, py);
        }

        if (LEVEL >= 5) {
          floatingobjects.createTriangleObject(1, px, py);
        }
        if (LEVEL === 10) {
          objects.removeSprites();

          boss.createBoss();

          battleSong.stop();
          bossSound.setVolume(0.1);
          bossSound.play();
        }
      }
    }
  }
}
