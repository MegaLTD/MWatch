function RI(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ThisEp(){
   let i = RI(0, 2);
   const links = [
      "https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E7/SGTptfxY9Q.html",
         "https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E7/SGTptfxY9Q.html",
            "https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E7/SGTptfxY9Q.html"
   ];

   window.location.href=links[i];
}