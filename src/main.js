// SW EFFECT ANIMATON
// $(document).ready(function() {
//   $("#titles")
//     .delay(1000)
//     .fadeOut();
// }); // <-- time in milliseconds

//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

let lg_image;
var bullets;
var objects;
var ship;
var shipImage, bulletImage, particleImage;
var MARGIN = 40;

const background = new Background();

function setup() {
  //Create a background
  createCanvas(1200, 900);
  background.setup();

  //Load images for paintBullets,
  bulletImage = loadImage("assets/asteroids_bullet.png");
  shipImage = loadImage("assets/spaceship.png");
  particleImage = loadImage("assets/asteroids_particle.png");

  ship = createSprite(width / 2, height / 2);
  ship.maxSpeed = 6;
  ship.friction = 0.98;
  ship.setCollider("circle", 0, 0, 20);

  ship.addImage("normal", shipImage);
  ship.addAnimation(
    "thrust",
    "assets/spaceship001.png",
    "assets/spaceship002.png"
  );

  objects = new Group();
  bullets = new Group();

  for (var i = 0; i < 8; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createObject(3, px, py);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    ship.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    ship.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    ship.setSpeed(1.5, 270);
  } else if (key == " ") {
    ship.setSpeed(0, 0);
  }
  return false;
}

function draw() {
  background.draw();

  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow Keys + X", width / 2, 20);

  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
    if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
    if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
    if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
  }

  objects.overlap(bullets, objectHit);

  ship.bounce(objects);

  if (keyDown(LEFT_ARROW)) ship.rotation -= 5;
  if (keyDown(RIGHT_ARROW)) ship.rotation += 5;
  if (keyDown(UP_ARROW)) {
    ship.addSpeed(3, ship.rotation);
    ship.changeAnimation("thrust");

    ship.position.x -= Math.sin(ship.rotation) * ship.getSpeed();
    ship.position.y -= Math.cos(ship.rotation) * ship.getSpeed();
  } else ship.changeAnimation("normal");

  if (keyWentDown("x")) {
    var bullet = createSprite(ship.position.x, ship.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10 + ship.getSpeed(), ship.rotation - 90);
    bullet.life = 50;
    bullets.add(bullet);
  }

  // ship.velocity.x = (mouseX - ship.position.x) * 0.5;
  // ship.velocity.y = (mouseY - ship.position.y) * 0.5;

  drawSprites();
}

function createObject(type, x, y) {
  var a = createSprite(x, y);
  var img = loadImage("assets/roundObject" + floor(random(0, 3)) + ".png");
  a.addImage(img);
  a.setSpeed(2.5 - type / 2, random(360));
  a.rotationSpeed = 0.5;
  //a.debug = true;
  a.type = type;

  if (type == 2) a.scale = 0.6;
  if (type == 1) a.scale = 0.3;

  a.mass = 2 + a.scale;
  a.setCollider("circle", 0, 0, 50);
  objects.add(a);
  return a;
}

function objectHit(object, bullet) {
  var newType = object.type - 1;

  if (newType > 0) {
    createObject(newType, object.position.x, object.position.y);
    createObject(newType, object.position.x, object.position.y);
  }

  for (var i = 0; i < 10; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y);
    p.addImage(particleImage);
    p.setSpeed(random(3, 5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }

  bullet.remove();
  object.remove();
}