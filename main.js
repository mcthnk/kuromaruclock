var hyoujihihyouji = 0;

function syoki(){
    window.scrollTo(0,0);
    document.getElementById("menu").style.visibility ="hidden";
    hyoujihihyouji = 0;
};

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
    var element = document.getElementById("tokei");
    element.innerHTML = hh + ':' + mi;
    var element = document.getElementById("hizuke");
    element.innerHTML = yyyy + '/' + mm + '/' + dd + " " + youbirisuto;
}
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(yyyymmddhhmiss, 100);

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