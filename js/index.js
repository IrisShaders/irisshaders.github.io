let slideIndex = 1;
let currentTimeout;

function isInViewport(el) {
  let rect = el.getBoundingClientRect();

  let value =
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth);

  if (value) {
    el.classList.add("faded");
    el.classList.remove("fadein");
  }
}

window.addEventListener(
  "scroll",
  (e) => {
    document
      .querySelectorAll(".fadein")
      .forEach((element) => isInViewport(element));
  },
  false
);
window.addEventListener("DOMContentLoaded", (e) => {
  document
    .querySelectorAll(".fadein")
    .forEach((element) => isInViewport(element));
  menuButton = document.querySelector(".hamburger-button.w-nav-button");
  menuButton.onclick = openMiniNav;
  dots = document.querySelector("#dots");
  if (dots) {
    let children = document.querySelector(".w-slider-mask").children;
    dots.innerHTML = "";
    for (let i = 0; i < children.length; i++) {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if(i == 0){ dot.classList.add("dot-selected");}
      dot.onclick = function () {
        currentSlide(i + 1);
      };
      dots.appendChild(dot);
    }
  }
});

function openMiniNav() {
  menuButton = document.querySelector(".hamburger-button.w-nav-button");
  menuButton.classList.add("w--open");
  navOverlay = document.querySelector(".w-nav-overlay");
  navOverlay.style.height = "4353.5px";
  navOverlay.style.display = "inline-block";
  miniNav = document.querySelector("#minimenu");
  setTimeout(function () {
    miniNav.style.transform = "translateY(0px) translateX(0px)";
  }, 10);
  navOverlay.onclick = closeMiniNav;
  menuButton.onclick = closeMiniNav;
  if (currentTimeout) {
    clearTimeout(currentTimeout);
  }
}

function closeMiniNav() {
  menuButton = document.querySelector(".hamburger-button.w-nav-button");
  menuButton.classList.remove("w--open");
  miniNav = document.querySelector("#minimenu");
  miniNav.style.transform = "translateY(-284px) translateX(0px)";
  currentTimeout = setTimeout(function () {
    navOverlay = document.querySelector(".w-nav-overlay");
    navOverlay.style.display = "none";
    navOverlay.style.height = "0";
  }, 400);
  menuButton.onclick = openMiniNav;
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  document.querySelector(".dot-selected").classList.remove("dot-selected")
  document.querySelectorAll(".dot")[n - 1].classList.add("dot-selected");
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".w-slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
