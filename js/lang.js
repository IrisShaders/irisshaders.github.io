let fileindex = ["index.html", "about.html", "download.html"];
let traductions = ["en", "en_US", "fr", "de", "ru", "es","zh_CN","zh_TW"];
let fallbacklang;
let lang;

//Loading the lang
let langData;
function initLang(page) {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", navigator.language.replace("-", "_"));
  }
  lang = localStorage.getItem("lang");
  console.log(lang)
  if (!traductions.includes(lang)) {
    lang = lang.split("_")[0];
    if (!traductions.includes(lang)) {
      lang = "en";
    }
  }

  fetch("./locales/en.json")
    .then((response) => response.json())
    .then((datafall) => {
      fallbacklang = datafall;
      fetch("./locales/" + lang + ".json")
        .then((response) => response.json())
        .then((data) => {
          langData = data;
          let realfallbacklang = {...fallbacklang.data[page], ...fallbacklang.common};
          let reallangdata = {...langData.data[page], ...langData.common};
          for (let [key, value] of Object.entries(realfallbacklang)) {
            if (key in reallangdata) {
              value = reallangdata[key];
            }
            let el = document.querySelector(`[langfield="${key}"]`);
            if (el) {
              document
                .querySelectorAll(`[langfield="${key}"]`)
                .forEach((element) => (element.innerHTML = value));
            }
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
