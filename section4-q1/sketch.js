// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size = 40;
let vr = 1;

function setup(){
  createCanvas(200, 200);
  // count = 0;
  // cycle = 100;
}

function draw(){
  background(160, 192, 255);
  size += vr
  if(size < 40 || size > 100){ vr = -1 * vr; }
  ellipse(width / 2, height / 2, size);
}

function mousePressed(){
  if(vr >= 0){
    vr += 1;
  } else {
    vr -= 1;
  }
}

function mouseReleased(){
  if(vr >= 0){
    vr -= 1;
  } else {
    vr += 1;
  }
}
