// SW EFFECT ANIMATON
// $(document).ready(function() {
//   $("#titles")
//     .delay(1000)
//     .fadeOut();
// }); // <-- time in milliseconds

//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

let bullets;
let objects;
let meteors;
let xattack;
let pointattackImage;
let pointsCount = 0;
let health = 100;
let shipImage, bulletImage, particleImage, meteorImage;
let MARGIN = 40;
let LEVEL = 0;

const background = new Background();
const ship = new Ship();
const floatingobjects = new Floatingobjects();
const weapons = new Weapons();
const objectEngine = new ObjectEngine();
const collisionEngine = new CollisionEngine();

function preload() {
  bulletImage = loadImage("assets/asteroids_bullet.png");
  shipImage = loadImage("assets/spaceship.png");
  particleImage = loadImage("assets/asteroids_particle.png");
  meteorImage = loadImage("assets/meteor.png");
  xattack = loadImage("assets/xattack0001.png", "assets/xattack0002.png");
  pointattackImage = loadImage("assets/multipointattack.png");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);

  if (LEVEL === 0) {
    background.setup();
  } else if (LEVEL === 1) {
    background.setup();
  } else if (LEVEL === 2) {
    background.setup();
  }

  ship.setup();
  objects = new Group();
  bullets = new Group();
}

function draw() {
  background.draw();

  ship.rotationControls();
  ship.attacksControls();
  ship.keyPresses();
  ship.isHit();
  if (frameCount % 10 === 0) {
    objectEngine.objectCreator();
  }

  drawSprites();

  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
    if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
    if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
    if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
  }

  objects.overlap(bullets, collisionEngine.objectHit);
}

collisionEngine.objectHit();
