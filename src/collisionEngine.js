class CollisionEngine {
  constructor() {}

  objectHit(object, bullet) {
    if (!object) return;

    var newType = object.type - 1;
    pointsCount++;
    // console.log(pointsCount);
    // console.log(LEVEL);
    document.querySelector("#level").innerHTML = LEVEL;
    document.querySelector("#score").innerHTML = pointsCount;

    // if (pointsCount > 25) {
    //   if (LEVEL <= 5) {
    //     if (pointsCount % 25 == 1) {
    //       LEVEL++;
    //     }
    //   }

    //   if (LEVEL > 5) {
    //     if (pointsCount % 50 == 1) {
    //       LEVEL++;
    //     }
    //   }
    // }

    switch (pointsCount) {
      case 25:
        LEVEL = 2;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 50:
        LEVEL = 3;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED - PRESS X TO USE MULTI-STRIKE`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 75:
        LEVEL = 4;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 100:
        LEVEL = 5;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED - PRESS Z TO USE ROCKETBEAM`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 150:
        LEVEL = 6;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 200:
        LEVEL = 7;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED - PRESS V TO USE X-STRIKE`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 250:
        LEVEL = 8;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 300:
        LEVEL = 9;
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector(
          "#message1"
        ).innerHTML = `LEVEL ${LEVEL} REACHED`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 500:
        LEVEL = 10;
        document.querySelector("#level").innerHTML = "💀BOSS💀";
        document.querySelector(
          "#message1"
        ).innerHTML = `!!!!!BOSS LEVEL REACHED!!!!!`;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
    }

    // if (LEVEL >= 25) {
    //   LEVEL = 1;
    //   document.querySelector("#level").innerHTML = LEVEL;
    //   document.querySelector("#message1").style.display = "block";
    //   setTimeout(() => {
    //     document.querySelector("#message1").innerHTML = "";
    //   }, 1500);
    // }
    // if (pointsCount >= 50) {
    //   LEVEL = 2;
    //   document.querySelector("#level").innerHTML = LEVEL;
    //   document.querySelector("#message2").style.display = "block";
    //   setTimeout(() => {
    //     document.querySelector("#message2").innerHTML = "";
    //   }, 1500);
    // }
    // document.querySelector("#score").innerHTML = pointsCount;
    // console.log(pointsCount);

    // if (newType > 0) {
    //   floatingobjects.createRoundObject(
    //     newType,
    //     object.position.x,
    //     object.position.y
    //   );
    //   floatingobjects.createTriangleObject(
    //     newType,
    //     object.position.x,
    //     object.position.y
    //   );
    //   floatingobjects.createSquareObject(
    //     newType,
    //     object.position.x,
    //     object.position.y
    //   );
    // }

    // for (var i = 0; i < 3; i++) {
    //   var p = createSprite(bullet.position.x, bullet.position.y);
    //   p.addImage(particleImage);
    //   p.setSpeed(random(3, 50), random(360));
    //   p.friction = 0.95;
    //   p.life = 15;
    // }

    bullet.remove();
    object.remove();
  }
}
