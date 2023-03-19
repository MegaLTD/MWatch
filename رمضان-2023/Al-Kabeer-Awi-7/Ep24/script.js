function RI(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ThisEp(){
   let i = RI(0, 2);
   const links = [
      "https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E24/MbEM5Da60U.html",
         "https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E24/MbEM5Da60U.html",
            "https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E24/MbEM5Da60U.html"
   ];

   window.location.href=links[i];
}