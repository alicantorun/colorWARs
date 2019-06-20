let trailarr = [];
let a = 0;

class Trail {
  draw() {
    trailarr.push([ship.shipSpr.position.x, ship.shipSpr.position.y]);
    for (let i = 0; i < trailarr.length; i++) {
      noStroke();
      fill(100, 255, 255, a);
      ellipse(trailarr[i][0], trailarr[i][1], 7 + i * 0.3);
      if (a > 255) {
        trailarr.shift();
        a = 0;
      }
      a += 12;
    }
  }
}
