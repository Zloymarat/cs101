
function setup() {
  createCanvas(300, 300);

    for (let i = 60; i < width; i = i + 15){
      for (let j = 60; j < width; j = j + 15){
    fill(random(220, 255), random(150, 179) , random(190, 204));
    rect(i, j, 30, 30);
    //     fill(random(10, 10), random(20, 24) , random(20, 25));
    // rect(i, j, 30, 30);
      }
    beginShape(); 
      fill(random(0, 255), random(0, 255) , random(0, 255));
    vertex(150, 150);
    vertex(120, 180);
    vertex(180, 180);
    endShape(CLOSE);
      
      for (let i = 0; i < 2; i = i + 1){
    let cx = random(0, width);
    let cy = random(0, height);   
    fill(random(0, 255), random(0, 255) , random(0, 255));
    ellipse(cx, cy, 12, 12)
  } 
    for (let i = 0; i < 2; i = i + 1){
    let cx = random(0, width);
    let cy = random(0, height);   
    fill(random(0, 255), random(0, 255) , random(0, 255));
    rect(cx, cy, 10, 10)
  }   

    }
}
