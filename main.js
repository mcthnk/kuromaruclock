// hyoujihijyouji 0はクローズ状態
var hyoujihihyouji = 0;
// デフォルトは秒表示OFF 0でOFF、1でON
var byou = 0;

function syoki(){
    window.scrollTo(0,0);
    hyoujihihyouji = 0;
    byou = localStorage.getItem('kirikaehozon');
    if (byou == 0){
      document.getElementById("byouswitch").src = "img/off.png";
    }else if (byou == 1){
      document.getElementById("byouswitch").src = "img/ON.png";
    }
    if (byou == null){
      byou = 0;
    }
}

function byoukirikae(){
    if(byou == 0){
      byou = 1;
      document.getElementById("byouswitch").src = "img/ON.png";
      localStorage.setItem('kirikaehozon', '1');
    }else if(byou == 1){
      byou = 0;
      document.getElementById("byouswitch").src = "img/off.png";
      localStorage.setItem('kirikaehozon', '0');
    }else{
      alert("エラーが発生しました");
    }
}

function resetbyou(){
  localStorage.removeItem('kirikaehozon');
  var kakunin = localStorage.getItem('kirikaehozon');
  alert("消去しました");
  location.reload();
}

function yyyymmddhhmiss() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = toDoubleDigits(date.getMonth() + 1);
    var dd = toDoubleDigits(date.getDate());
    var hh = toDoubleDigits(date.getHours());
    var mi = toDoubleDigits(date.getMinutes());
    var ss = toDoubleDigits(date.getSeconds());
    var youbi = date.getDay();
    var youbirisuto = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][youbi];
    if(byou == 0){
      var element = document.getElementById("tokei");
      element.innerHTML = hh + ':' + mi;
      var element = document.getElementById("hizuke");
      element.innerHTML = yyyy + '/' + mm + '/' + dd + " " + youbirisuto;
    }else if(byou == 1){
      var element = document.getElementById("tokei");
      element.innerHTML = hh + ':' + mi + ':' + ss;
      var element = document.getElementById("hizuke");
      element.innerHTML = yyyy + '/' + mm + '/' + dd + " " + youbirisuto;
    }
}
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(yyyymmddhhmiss, 100);

  // hyoujihijyouji 0はクローズ状態、1はオープン状態
function menuopen(){
    if(hyoujihihyouji == 0){
        document.getElementById("menu").style.visibility ="visible";
        document.getElementById("topbartxt").textContent = "×";
        hyoujihihyouji = 1;
    }else{
        document.getElementById("menu").style.visibility ="hidden";
        document.getElementById("topbartxt").textContent = "＝";
        hyoujihihyouji = 0;
    }
};