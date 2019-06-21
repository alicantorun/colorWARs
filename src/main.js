// SW EFFECT ANIMATON
// $(document).ready(function() {
//   $("#titles")
//     .delay(1000)
//     .fadeOut();
// }); // <-- time in milliseconds

//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

let system;
let bullets;
let objects;
let meteors;
let xattack;
let pointattackImage;
let pointsCount = 0;
let health = 100;
let shipImage, bulletImage, particleImage, meteorImage, bossImg, bossAttackImg;
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
let game_over = false;
let bossHp = 0;
let song;
let battleSong;
let rocketSound;
let laserSong;
let multiSound;
let xSound;
let bossSound;
let noSound;
let xPosBoss = 250;
let yPosBoss = 250;

// const background = new Background();

const ship = new Ship();
const floatingobjects = new Floatingobjects();
const weapons = new Weapons();
const objectEngine = new ObjectEngine();
const collisionEngine = new CollisionEngine();
const obstacles = new Obstacles();
const boss = new Boss();
const trail = new Trail();
const background = new Background();

function preload() {
  bulletImage = loadImage("assets/asteroids_bullet.png");
  shipImage = loadImage("assets/spaceship.png");
  particleImage = loadImage("assets/asteroids_particle.png");
  meteorImage = loadImage("assets/meteor.png");
  xattack = loadImage("assets/xattack0001.png", "assets/xattack0002.png");
  pointattackImage = loadImage("assets/multipointattack.png");
  soundFormats("mp3", "ogg");
  song = loadSound("assets/Star Wars Theme Song By John Williams.mp3");
  battleSong = loadSound("assets/battle.mp3");
  rocketSound = loadSound("assets/rocket.mp3");
  laserSong = loadSound("assets/laser1.mp3");
  multiSound = loadSound("assets/multi.mp3");
  xSound = loadSound("assets/xgun.mp3");
  bossSound = loadSound("assets/boss.mp3");
  noSound = loadSound("assets/noo.mp3");
  bossAttackImg = loadImage("assets/bossAttack.png");
}

function setup() {
  createCanvas(1400, 900);
  ship.setup();
  objects = new Group();
  bullets = new Group();
  if (!song.isPlaying()) song.play();

  background.setup();
}

function draw() {
  clear();

  if (game_state === true) {
    background.draw();
  }

  // if (boss_state === true) {
  //   if (frameCount % 30 === 0) {
  //     for (let i = 0; i < 255; i++) {
  //       background(i, 0, 0);
  //     }
  //   }
  // } else {
  //   background(pointsCount / 2, pointsCount / 2, pointsCount / 2);
  // }

  ship.rotationControls();
  ship.attacksControls();
  ship.keyPresses();
  ship.isHit();
  trail.draw();

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

  if (boss.bossSpr) {
    boss.bossMovement();
    if (frameCount % 180 === 0) {
      boss.bossStrike();
    }
  }

  drawSprites();

  if (health <= 0) {
    objects.removeSprites();

    battleSong.stop();
    if (!noSound.isPlaying()) noSound.play();

    // noSound.setVolume(0.1);
    // noSound.play();
    objects.overlap(bullets, collisionEngine.objectHit);
    document.querySelector("#game-board").innerHTML = "";
    document.querySelector("#message1").style.display = "block";
    document.querySelector("#message1").innerHTML = "GAME OVER - YOU LOST!";
    document.querySelector("#start-game").style.display = "block";
    document.getElementById("start-game").addEventListener("click", function() {
      location.reload();
    });

    setTimeout(() => {
      document.querySelector("#message1").style.display = "none";
      location.reload();
    }, 3000);
  }

  if (game_state === true && boss_state === false) {
    objects.overlap(bullets, collisionEngine.objectHit);
  } else if (boss_state === true && game_state === false) {
    objects.collide(bullets, function(e) {
      bossHp++;
      if (bossHp >= 1000) {
        bossSound.stop();
        noSound.setVolume(0.1);
        noSound.play();
        objects.removeSprites();
        objects.overlap(bullets, collisionEngine.objectHit);
        document.querySelector("#game-board").innerHTML = "";
        document.querySelector("#message1").style.display = "block";
        document.querySelector("#message1").innerHTML =
          "VICTORY IS YOURS CHAMP!";

        setTimeout(() => {
          location.reload();

          document.querySelector("#message1").style.display = "none";
        }, 5000);
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
  ).innerHTML = `BEGIN GAME /-> CONTROLS   -  ARROW KEYS  -  TO SHOOT PRESS  -  C`;
  document.querySelector("#message1").style.display = "block";
  setTimeout(() => {
    document.querySelector("#message1").style.display = "none";
  }, 5000);
  console.log(1);
});

$("#start-game")
  .delay(15000)
  .show(0);
