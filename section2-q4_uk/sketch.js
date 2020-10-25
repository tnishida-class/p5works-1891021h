// Union Jack
//http://www.jdawiseman.com/papers/union-jack/union-jack.html

let d;

function setup() {
  createCanvas(360, 180);
  const greatBlue = color(1, 33, 105);
  const greatRed = color(200, 16, 46);
  noStroke();
  background(greatBlue);
  fill(greatBlue);


  d = height / 15; // 縞1本の太さ
  c = width / 60


    rot1(greatRed);
    rot2(greatRed);

  for(let i = 0; i < 15; i++){
    if(i == 5 || i == 9){
      fill(255);
      rect(0, i*d, width, d);
    } else if (6 <= i && i <= 8) {
      fill(greatRed);
      rect(0, i*d, width, d);
    }
  }

  for(let i = 0; i < 60; i++){
    if(i == 26 || i == 27 || i == 34 || i == 35){
      fill(255);
      rect(c*i, 0, c, height);
      fill(greatRed);
      rect(c*i, 6*d, c, 3*d);
    } else if (28 <= i && i <= 33) {
      fill(greatRed);
      rect(c*i, 0, c, height);
    }
  }

}

function rot1(red){
  push();
  fill(255);
  stroke(255);

  rotate(atan(1/2));
  rect(0, -1.5*d, width*sqrt(5), 3*d);
  fill(red);
  rect(0, 0, width*sqrt(5)/4, d);
  rect(width*sqrt(5)/4, -d, width*sqrt(5)/4, d);
  pop();
}

function rot2(red){
  push();
  fill(255);
  noStroke();

  translate(0,180);
  rotate(-atan(1/2));
  rect(0, -1.5*d, width*sqrt(5)/2, 3*d);
  fill(red);
  rect(0, 0, width*sqrt(5)/4, d);
  rect(width*sqrt(5)/4, -d, width*sqrt(5)/4, d);
  pop();
}
