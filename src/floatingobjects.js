class Floatingobjects {
  constructor() {}

  createRoundObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(0, 3)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;

    if (type == 2) a.scale = 0.9;
    if (type == 1) a.scale = 0.6;

    a.mass = 2 + a.scale;
    a.setCollider("circle", 0, 0, 50);
    objects.add(a);
    return a;
  }

  createTriangleObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(3, 6)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;

    if (type == 2) a.scale = 0.9;
    if (type == 1) a.scale = 0.6;

    a.mass = 2 + a.scale;
    a.setCollider("circle", 0, 0, 50);
    objects.add(a);
    return a;
  }

  createSquareObject(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage("assets/roundObject" + floor(random(6, 9)) + ".png");
    a.addImage(img);
    a.setSpeed(2.5 - type / 2, random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;

    if (type == 2) a.scale = 0.9;
    if (type == 1) a.scale = 0.6;

    a.mass = 2 + a.scale;
    a.setCollider("circle", 0, 0, 50);
    objects.add(a);
    return a;
  }
}
