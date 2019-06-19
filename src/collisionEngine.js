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

    if (pointsCount > 25) {
      if (LEVEL <= 5) {
        if (pointsCount % 25 == 1) {
          LEVEL++;
        }
      }

      if (LEVEL > 5) {
        if (pointsCount % 50 == 1) {
          LEVEL++;
        }
      }
    }

    switch (pointsCount) {
      case 25:
        document.querySelector("#level").innerHTML = LEVEL;
        document.querySelector("#message1").style.display = "block";
        setTimeout(() => {
          document.querySelector("#message1").style.display = "none";
        }, 1500);
        break;
      case 50:
        document.querySelector("#level").innerHTML = LEVEL;
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
