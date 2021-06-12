function reloadTheme() {
  var themeSwitcher = document.getElementById("theme-switcher");
  var themeSwitcherTrueText = themeSwitcher.innerHTML.slice(
    0,
    themeSwitcher.innerHTML.indexOf(">") + 1
  );
  themeSwitcher.innerHTML =
    themeSwitcherTrueText +
    (localStorage.getItem("darkMode") == "true" ? " Light Mode" : " Dark Mode");
  themeSwitcher.onclick = function () {
    var currentTheme = localStorage.getItem("darkMode");
    var switchToTheme = currentTheme === "true" ? "false" : "true";
    localStorage.setItem("darkMode", switchToTheme);
    reloadTheme();
  };
  if (!document.getElementById("darkThemeLink")) {
    var link = document.createElement("link");
    link.href = "css/darkmode_supplements.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "darkThemeLink";
    document.getElementsByTagName("head")[0].appendChild(link);
    if (localStorage.getItem("darkMode") == "true") {
      document
        .getElementById("darkThemeIcon")
        .setAttribute("src", "images/lightmode.png");
    } else {
      document
        .getElementById("darkThemeIcon")
        .setAttribute("src", "images/darkmode.png");
    }
  } else {
    if (document.getElementById("darkThemeLink")) {
      document.getElementById("darkThemeLink").remove();
    }
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  reloadTheme();
});
