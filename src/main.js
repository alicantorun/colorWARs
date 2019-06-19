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
let LEVEL = 1;
var col = 100;
var c = 80;
var d = 100;
let asd;
let sdf;
let dfg;
let boss_state = false;
let game_state = true;
let bossHp = 0;

// const background = new Background();
const ship = new Ship();
const floatingobjects = new Floatingobjects();
const weapons = new Weapons();
const objectEngine = new ObjectEngine();
const collisionEngine = new CollisionEngine();
const obstacles = new Obstacles();
const boss = new Boss();

function preload() {
  bulletImage = loadImage("assets/asteroids_bullet.png");
  shipImage = loadImage("assets/spaceship.png");
  particleImage = loadImage("assets/asteroids_particle.png");
  meteorImage = loadImage("assets/meteor.png");
  xattack = loadImage("assets/xattack0001.png", "assets/xattack0002.png");
  pointattackImage = loadImage("assets/multipointattack.png");
}

function setup() {
  createCanvas(900, 600);

  // if (LEVEL === 1) {
  //   background.setup();
  // } else if (LEVEL === 2) {
  //   background.setup();
  // } else if (LEVEL === 3) {
  //   background.setup();
  // }

  ship.setup();
  objects = new Group();
  bullets = new Group();
}

function draw() {
  // background.draw(25, 25, 25);
  clear();
  background(pointsCount, pointsCount, pointsCount);

  ship.rotationControls();
  ship.attacksControls();
  ship.keyPresses();
  ship.isHit();

  if (LEVEL <= 3) {
    if (frameCount % 25 === 0) {
      objectEngine.objectCreator();
    }
  } else if (LEVEL >= 4 && LEVEL <= 6) {
    if (frameCount % 45 === 0) {
      objectEngine.objectCreator();
    }
  } else if (LEVEL >= 7) {
    if (frameCount % 55 === 0) {
      objectEngine.objectCreator();
    }
  }

  drawSprites();

  if (game_state === true && boss_state === false) {
    objects.overlap(bullets, collisionEngine.objectHit);
  } else if (boss_state === true && game_state === false) {
    objects.collide(bullets, function(e) {
      bossHp++;
      if (bossHp >= 500) {
        objects.overlap(bullets, collisionEngine.objectHit);
        document.querySelector("#level").innerHTML = "VICTORY IS YOURS CHAMP!";
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
      }
    });
  }
}
