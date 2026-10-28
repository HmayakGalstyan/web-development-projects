"use strict";

const slider = document.querySelector(".slider");
const next = document.querySelector(".slider .btns .sliderBtn.next");
const prev = document.querySelector(".slider .btns .sliderBtn.prev");
const imgs = document.querySelectorAll(".slider .images .image");

const images = [
    "../img/chashka_kofe_knigi_156306_1600x900.jpg",
    "../img/kod_bukvy_ekran_137590_1600x900.jpg",
    "../img/korabli_more_svet_69192_1600x900.jpg",
    "../img/kot_chernyj_goluboglazyj_130470_1600x900.jpg",
    "../img/mototsiklist_noch_zvezdnoe_nebo_129588_1600x900.jpg",
    "../img/planety_vselennaia_galaktika_59622_1600x900.jpg",
    "../img/poezd_art_noch_129573_1600x900.jpg",
    "../img/reka_domik_art_131397_1600x900.jpg",
    "../img/tokio_nochnoj_gorod_neboskreby_121628_1600x900.jpg",
];

let current = 0;
let active = 0;
let oneactive = imgs[current].style.cssText = "filter: brightness(1.5); width: 200px; height: 250px;";

next.addEventListener("click", () => {
   current++;
   if (current === images.length) {
     current = 0;
   }
   slider.style.background = `url(${images[current]})`;
   
   imgs[active].style.cssText = "filter: brightness(0.5); ";
   active = current;
   imgs[current].style.cssText = "filter: brightness(1.5); width: 200px; height: 250px;";
});

prev.addEventListener("click", () => {
   current--;
   if (current < 0) {
    current = images.length - 1;
   }
   slider.style.background = `url(${images[current]})`;

   imgs[active].style.cssText = "filter: brightness(0.5);";
   active = current;
   imgs[current].style.cssText = "filter: brightness(1.5);  width: 200px; height: 250px;";
});

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", () => {
        current = i;
        slider.style.background = `url(${images[current]})`;

        imgs[active].style.cssText = "filter: brightness(0.5);";
        active = current;
        imgs[current].style.cssText = "filter: brightness(1.5); width: 200px; height: 250px;";
    })
};










