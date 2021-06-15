var fileindex = ["index.html", "about.html", "download.html"];
var langData;
var lang = navigator.language.replace("-", "_");
lang = "fr"

//Loading the lang
function initLang(page) {
  fetch("./locales/" + lang + ".json")
    .then((response) => response.json())
    .then((data) => {
      langData = data.data;
      console.log(langData);
      console.log("Loaded " + lang);
      for (const [key, value] of Object.entries(langData[page])) {
        var el = document.querySelector(`[langfield="${key}"]`);
        if (el) {
          document
            .querySelectorAll(`[langfield="${key}"]`)
            .forEach((element) => (element.innerHTML = value));
        }
      }
    })
    .catch((err) => console.log(err));
}
