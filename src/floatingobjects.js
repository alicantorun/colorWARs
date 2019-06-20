class Floatingobjects {
  constructor() {}

  createRoundObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(0, 2)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.05;
    //a.debug = true;
    a.type = type;

    // if (type == 3) {
    //   a.scale = 1.2;
    // }
    if (type == 1) {
      a.scale = 1;
    }
    if (type == 2) {
      a.scale = 1.5;
    }

    a.mass = 2 + a.scale;
    a.setDefaultCollider();
    objects.add(a);
    return a;
  }

  createTriangleObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(2, 4)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;

    if (type == 1) {
      a.scale = 1;
    }
    if (type == 2) {
      a.scale = 1.5;
    }

    a.mass = 2 + a.scale;
    a.setDefaultCollider();
    objects.add(a);
    return a;
  }

  createSquareObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(4, 6)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;

    if (type == 1) {
      a.scale = 1;
    }
    if (type == 2) {
      a.scale = 1.5;
    }

    a.mass = 2 + a.scale;
    a.setDefaultCollider();
    objects.add(a);
    return a;
  }
}
