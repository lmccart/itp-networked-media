function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  
  for (var i=0; i<width; i=i+50) {
    ellipse(i, height/2, 40, 40);
  }

}
