var fileindex = ["index.html", "about.html", "download.html"];
var traductions = ["en", "en_US", "fr"]
var lang = navigator.language.replace("-", "_");
if(!traductions.includes(lang)){
  lang = lang.split("_")[0]
  if(!traductions.includes(lang)){
    lang = "en"
  }
}

//Loading the lang
var langData;
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
