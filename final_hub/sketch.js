// テキスト「アニメーション」
//外で宣言
let x, y, vx, vy, p;
let total;
let count = [0,0,0,0,0,0];
let cnstry = [0,0,0]
vx = [0, 0, 0];
vy = 2;
const vyMax = 30;
const bools = [[bool(),bool(),bool(),bool(),bool()],[bool(),bool(),bool(),bool(),bool()],[bool(),bool(),bool(),bool(),bool()],[bool(),bool(),bool(),bool(),bool()],[bool(),bool(),bool(),bool(),bool()]];

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = [width / 2, width / 2, width / 2];
  y = [height / 10, height / 10 - 30, height / 10 - 60];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < 3; i++){
    ellipse(x[i], y[i], 20, 20);
    x[i] += vx[i];
    y[i] += vy;

  for(let j = 0; j < 5; j++){
    if(y[i] >= 100 + 50*j & y[i] < 150 + 50*j){
      vx[i] = bools[i][j];
    }
  }

    //if(y[i] > height - 10){ vy = 0; }
    if(y[i] > height - 100){ vx[i] = 0; }
    x[i] = constrain(x[i], 0, width);
    y[i] = constrain(y[i], 0, height - cnstry[i]);
  }//for1
}//draw()

function otherThanAnimation(){
  for(let i = 0; i < 3; i++){
    total = bools[i].reduce(function(a, x){return a + x;}, 0);
      if(total == -5){
        p = 0;
        count[0] += 1;
      } else if (total == -3){
        p = 1;
        count[1] += 1;
      } else if (total == -1){
        p = 2;
        count[2] += 1;
      } else if (total == 1){
        p = 3;
        count[3] += 1;
      } else if (total == 3){
        p = 4;
        count[4] += 1;
      } else if (total == 5){
        p = 5;
        count[5] += 1;
      } else {
        console.log('error');
      }

    if(count[p] == 1){
      cnstry[i] = 10;
    } else if(count[p] == 2){
      cnstry[i] = 20;
    } else if(count[p] == 3){
      cnstry[i] = 30;
    } else {
      console.log('error');
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

/**
 * 数値の合計値を取得
 * @param {Number[]} nums 合計値を得る数値の配列
 */
var sum = function(nums) {
    return nums.reduce(function(a, x) { return a + x; });
};
