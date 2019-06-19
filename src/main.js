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
let game_state = false;
let bossHp = 0;
let song;
let battleSong;
let rocketSound;
let laserSong;

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
  soundFormats("mp3", "ogg");
  song = loadSound("/assets/Star Wars Theme Song By John Williams.mp3");
  battleSong = loadSound("/assets/battle.mp3");
  rocketSound = loadSound("/assets/rocket.mp3");
  laserSong = loadSound("/assets/laser1.mp3");
}

function setup() {
  createCanvas(1200, 900);

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

  song.setVolume(0.1);
  song.play();
}

function draw() {
  // background.draw(25, 25, 25);
  clear();
  if (boss_state === true) {
    if (frameCount % 30 === 0) {
      for (let i = 0; i < 255; i++) {
        background(i, 0, 0);
      }
    }
  } else {
    background(pointsCount / 2, pointsCount / 2, pointsCount / 2);
  }
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
        document.querySelector("#message1").style.display = "block";
        document.querySelector("#message1").innerHTML =
          "VICTORY IS YOURS CHAMP!";

        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
      }
    });
  }
}

document.getElementById("start-game").addEventListener("click", function() {
  document.querySelector("#start-game").style.display = "none";
  document.querySelector("#game-banner").style.display = "none";
  document.querySelector("#game-container").style.display = "block";
  song.stop();
  battleSong.setVolume(0.1);
  battleSong.play();

  game_state = true;
  LEVEL = 1;
  document.querySelector("#level").innerHTML = LEVEL;
  document.querySelector(
    "#message1"
  ).innerHTML = `BEGIN - CONTROLS    W,A,S,D    TO SHOOT PRESS    C`;
  document.querySelector("#message1").style.display = "block";
  setTimeout(() => {
    document.querySelector("#message1").style.display = "none";
  }, 5000);
  console.log(1);
});

$("#start-game")
  .delay(1000)
  .show(0);
