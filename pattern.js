function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  strokeWeight (4);
  drawline(0, 360, 30, [0, 0, 0], 190, 190, 3, 75, 75, 0);
  drawline(0, 360, 8, [42, 42, 42], 350, 350, 1, 70, 35, 0);
  drawline(0, 360, 8, [42, 42, 42], 400, 400, 2, 400, 50, 0);
  function drawline(startAngle, endAngle, angleInc, strokeClr, lenCutX, lenCutY, strokeW, endX, endY, lengthInc){
    let incr = 0;
    for (let i = 0; i < endAngle / angleInc; i++) {
      push();
      stroke(strokeClr[0], strokeClr[1], strokeClr[2]);
      strokeWeight(strokeW);
      translate(width/2, height/2);
      rotate(radians(startAngle));
      line(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
      ellipse(width/4.5 - lenCutX - incr, height/4.5 - lenCutY - incr, endX, endY);
      ellipse(width/12 - lenCutX - incr, height/12 - lenCutY - incr, endX, endY);
      fill(255, 255, 255);
      ellipse(width/4.45 - lenCutX - incr, height/4.45 - lenCutY - incr, endX/6, endY/6);
      pop();
      startAngle += angleInc;
      incr += lengthInc;
  }
 }
  drawellipses(width/2, height/2, 150, 150);
  drawellipses(width/2, height/2, 282, 282);
  drawellipses(width/2, height/2, width/6, height/6);
  drawellipses(width/2, height/2, 440, 440);
  function drawellipses(cx, cy, d, d) {
    noFill();
    ellipse(cx, cy, d, d);
  }
  strokeWeight(20);
  point(width/2, height/2);
  
  strokeWeight(5);
  stroke(255, 255, 255);
  point(width/2, height/2);
}
