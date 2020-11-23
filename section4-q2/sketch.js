// テキスト「アニメーション」
let x, y, angle, vx, vy, om;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  angle = 0;
  vx = 5;
  vy = 5;
  om = 5;
}

function draw(){
  background(0);
  star(x, y, 20, angle);
  x += vx;
  y += vy;
  angle += om;
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function star(cx, cy, r, angle){
  fill(255, 229, 0);
  noStroke();
  beginShape();
  for(let i = 0; i < 20; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    theta += angle;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
