var places = [0, 100, 250, 300, 18, 450];

function setup() {
  createCanvas(640, 360); 
  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);
 
  for (var i=0; i<places.length; i++) {
  	line(places[i], 0, places[i], height);
  }
}










