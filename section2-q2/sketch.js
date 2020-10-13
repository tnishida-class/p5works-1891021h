// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(i % 2 == 1){
      fill(j % 2 == 0 ? 100 : 255);
    } else {
      fill(j % 2 == 0 ? 255 : 100);
    }
      rect(size*i, size*j, 25, 25);
    }
  }//for
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 8; j++){
      if(j < 3){
        fill(255,0,0)
      } else if(j < 5){
        noFill();
      } else {
        fill(0);
      }
      b=(j % 2 == 1 ? 12.5 : 12.5+25)
      ellipse(2*size*i+b, size*j+12.5, 20, 20);
    }
  }
}//setup()
