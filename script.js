const knopka = document.getElementById("likeBtn");
const schetchik = document.getElementById("likeCount");
const povtor = document.getElementById("povtorBtn");
const zagolovok = document.querySelector("h1");

let lajki = 0;

knopka.addEventListener("click", function () {
  lajki = lajki + 1;
  schetchik.textContent = lajki;

  const serdce = document.createElement("span");
  serdce.className = "serdce";
  serdce.innerHTML = '<img src="heart.svg" alt="">';
  knopka.appendChild(serdce);

  setTimeout(function () {
    serdce.remove();
  }, 900);
});

let tekst = "";
let taimer = null;

function pechatat() {
  clearInterval(taimer);
  let bukva = 0;
  zagolovok.textContent = "";

  taimer = setInterval(function () {
    zagolovok.textContent = tekst.slice(0, bukva);
    bukva = bukva + 1;
    if (bukva > tekst.length) {
      clearInterval(taimer);
    }
  }, 70);
}

povtor.addEventListener("click", function () {
  lajki = 0;
  schetchik.textContent = 0;

  if (zagolovok) {
    pechatat();
  }
});

if (zagolovok) {
  tekst = zagolovok.textContent;
  pechatat();
}
