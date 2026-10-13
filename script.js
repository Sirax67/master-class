const knopka = document.getElementById("likeBtn");
const schetchik = document.getElementById("likeCount");

let lajki = 0;

knopka.addEventListener("click", function () {
  lajki = lajki + 1;
  schetchik.textContent = lajki;
});
