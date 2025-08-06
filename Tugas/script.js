
window.onscroll = function () {
  let btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const teks = "Hi, Selamat Datang di Website Asheril!";
let i = 0;
const speed = 100;

function typeEffect() {
  if (i < teks.length) {
    document.getElementById("type-text").innerHTML += teks.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}






