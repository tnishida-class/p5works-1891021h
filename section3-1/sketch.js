// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
// https://www.schemecolor.com/europe-flag-colors.php
//https://www.crwflags.com/fotw/flags/eu%27eun.html

function setup(){
  r = 10;
  createCanvas(27*r, 18*r);
  background(0, 51, 153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 27 * r / 2 + cos(theta) * 6 * r;
    let y = 18 * r / 2 + sin(theta) * 6 * r;
    star(x, y, r)
  }
}

function star(cx, cy, r){
  fill(255, 204, 0);
  noStroke();
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
