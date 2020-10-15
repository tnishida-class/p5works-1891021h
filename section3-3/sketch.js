// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      //console.log(i + "年はうるう年です");
    }
    else{
      //console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
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
  console.log(count);

  z = ((count % 7 - 1) % 7 + 4) % 7;
  console.log(z);

  return(dayOfWeekAsString(z));
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
