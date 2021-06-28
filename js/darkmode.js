function reloadTheme(file) {
  let themeSwitcher = document.querySelectorAll("#theme-switcher");
  themeSwitcher.forEach(
    (el) =>
      (el.onclick = function () {
        let currentTheme = localStorage.getItem("darkMode");
        let switchToTheme = currentTheme == "true" ? "false" : "true";
        localStorage.setItem("darkMode", switchToTheme.toString());
        reloadTheme(file);
      })
  );
  themeSwitcher.forEach((el) =>
    el.setAttribute(
      "langfield",
      localStorage.getItem("darkMode") == "true" ? "light" : "dark"
    )
  );
  if (localStorage.getItem("darkMode") == "true") {
    if (!document.getElementById("darkThemeLink")) {
      let link = document.createElement("link");
      link.href = "css/darkmode_supplements.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "darkThemeLink";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    document
      .querySelectorAll("#darkThemeIcon")
      .forEach((el) => el.setAttribute("src", "images/header/lightmode.webp"));
    document
      .querySelectorAll("#darkThemeIcon")
      .forEach((el) => el.setAttribute("srcset", ""));
  } else {
    if (document.querySelector("#darkThemeLink")) {
      document.querySelectorAll("#darkThemeLink").forEach((el) => el.remove());
    }
    document
      .querySelectorAll("#darkThemeIcon")
      .forEach((el) => el.setAttribute("src", "images/header/darkmode.webp"));
    document
      .querySelectorAll("#darkThemeIcon")
      .forEach((el) => el.setAttribute("srcset", ""));
  }
  initLang(fileindex.indexOf(file));
}
