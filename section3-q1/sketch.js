// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love NISHINO Nanase",40,50,0,255,0,0);
}

function balloon(t,cx,cy,r,g,b,bw){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(r,g,b);
  rect(cx, cy, w + p * 2, h + p * 2);
  triangle(cx+w+p*2, cy+h+p*2, cx+w+p*2+10, cy+h+p*2, cx+w+p*2, cy+h+p*2-5)
  fill(bw);
  text(t, cx + p, cy + h + p);
}
