class ObjectEngine {
  constructor() {}

  objectCreator() {
    if (LEVEL === 0) {
      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        floatingobjects.createRoundObject(1, px, py);
        // floatingobjects.createTriangleObject(3, px, py);
        // floatingobjects.createSquareObject(3, px, py);
      }
      // LEVEL = 11
    }
    if (LEVEL === 1) {
      for (var y = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        floatingobjects.createRoundObject(2, px, py);
        floatingobjects.createTriangleObject(2, px, py);
        // floatingobjects.createSquareObject(3, px, py);
      }
    }
    if (LEVEL === 2) {
      for (var z = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        floatingobjects.createRoundObject(3, px, py);
        floatingobjects.createTriangleObject(3, px, py);
        floatingobjects.createSquareObject(3, px, py);
      }
    }
  }
}
