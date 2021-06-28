function isInViewport(el) {
  var rect = el.getBoundingClientRect();

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
  if(currentTimeout){ clearTimeout(currentTimeout) }
}

let currentTimeout;
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
