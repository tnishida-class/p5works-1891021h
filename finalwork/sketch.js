// 最終課題を制作しよう

// テキスト「アニメーション」
//外で宣言
const num = 200;
let vy;
let x = [];
let y = [];
let vx = [];
let total;
var bls = [];
const bools = [];
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let cnstry = [];
vy = 2;

for(let i = 0; i < num; i++){
  bls = [];
  for(let j = 0; j < 12; j++){
    bls[j] = bool();
  }
  bools[i] = bls;
  vx[i] = 0;
  cnstry[i] = 0;
}
//console.log(bools);
function setup(){
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < num; i++){
    x[i] = width / 2;
    y[i] = height / 10 - 10 * i;
  }
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < num; i++){
    ellipse(x[i], y[i], 15, 15);
    x[i] += vx[i];
    y[i] += vy;

  for(let j = 0; j < 12; j++){
    if(y[i] >= 100 + 20*j & y[i] < 120 + 20*j){
      vx[i] = 1.8*bools[i][j];
    }
  }

    if(y[i] >= 340){ vx[i] = 0; }
//    x[i] = constrain(x[i], 0, width);
    y[i] = constrain(y[i], -9999, height - cnstry[i]);
  }//for1
}//draw()

function otherThanAnimation(){
  let p;
  for(let i = 0; i < num; i++){
    total = bools[i].reduce(function(a, x){return a + x;}, 0);
    console.log(total);
    for(let k = 0; k < 13; k++){
      if(total == 2*k - 12){
        p = k;
        count[k] += 1;
      }
    }
    for(let m = 0; m < num ; m++){
      if(count[p] == m + 1){
        cnstry[i] = (m + 1)*3;
      }
    }
  }
  console.log(count);

}
otherThanAnimation();

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//列ベクトルの和
function sum(a, b, length){
  const sum = new Array(length);
  for(let i = 0; i < length; i++) {
    sum[i] = a[i] + b[i];
  }
  return sum;
}

//1か-1を等確率で返す関数
function bool(){
  rand = Math.random();
  if(rand < 0.5){
    return -1;
  } else {
    return 1;
  }
}
