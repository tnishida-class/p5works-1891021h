// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  y = 2020;
  m = 10;
  createCanvas(200, 200);
  list = calendar(y, m);
  const title = "Calendar　" + m + '/' + y + '.';
  document.getElementById('titleArea').innerHTML = title ;
  makeTable(list,'table');

  // for(let i = 2000; i <= 2100; i++){
  //   if(isLeapYear(i)){
  //     console.log(i + "年はうるう年です");
  //   }
  //   else{
  //     console.log(i + "年はうるう年ではありません");
  //   }
  // }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let array = [[],[],[],[],[],[],[],[]];
  for(let d = 1; d <= daysInMonth(y, m); d++){
    for(let i = 0; i <= 6; i++){
      if(dayOfWeek(y, m, d) == i){
         array[i].push(d);
      }
    }
  }
  const fs =firstSunday(y, m);
  for(let i = 0; i <= 6; i++){
    if(array[i][0] > fs && array[i].length == 5){
      array[i].unshift(''); //console.log(i + 'は上に1個追加');
    } else if(array[i][0] > fs && array[i].length == 4){
      array[i].unshift(''); array[i].push(''); //console.log(i + 'は上下に1個追加');
    } else if(array[i][0] <= fs && array[i].length == 5){
      array[i].push(''); //console.log(i + 'は下に1個追加');
    } else if(array[i][0] <= fs && array[i].length == 4){
      array[i].push('',''); //console.log(i + 'は下に2個追加');
    } else {
      console.log('Error');
    }
  }
  array[7] = array[0];
  array.shift();
  tarray = transpose(array);
  tarray.unshift(['M','T','W','T','F','S','S']);
  return tarray;
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
  //(4の倍数)かつ(100の倍数でない)　または　(400の倍数である)
  //戻り値はbool　うるう年ならtrueが返る
}

function daysInYear(y){
  // 西暦y年が何日あるかを返す関数
  return ( isLeapYear(y) ? 366 : 365);
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  //2月ならば，うるう年true or false ? trueなら29日 : falseなら28日
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }//4,6,8,11月は30日を返します。
  else{
    return 31;
  }//その他は31日を返します
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  //ここまでで先月まで<の日数
  return count + d;
}

//1970年1月1日は木曜日。IT業界では世界の始まりの日とされている。
function dayOfWeek(y, m, d){
  let count = 0;
  for(let i = 1970; i < y; i++){
    count += daysInYear(i);
  }
  // console.log(count);
  // ここまでで昨年までの日数

  count += dayOfYear(y,m,d);

  z = (count % 7 + 3) % 7;　//2回割って0~6に押し込める．

  return(z);
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

//配列を転置
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

//最初の日曜日を取得
function firstSunday(y, m){
  let sun = 1;
  for(let i = 1; i <= 7; i++){
    sun = i;
    if(dayOfWeek(y, m, i) == 0) break;
  }
  return sun;
}
//
function makeTable(data, tableId){

    let rows=[]; let table = document.createElement("table");

    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell = rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb";
            } else {
                cell.style.backgroundColor = "#ddd";
            }
        }
    }
    document.getElementById(tableId).appendChild(table);
}
