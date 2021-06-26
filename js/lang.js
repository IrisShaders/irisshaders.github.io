let fileindex = ["index.html", "about.html", "download.html"];
let traductions = ["en", "en_US", "pt_BR", "fr", "de", "ru", "es","zh_CN","zh_TW","nl"];
let traductionsNames = ["English", "American english", "Portugues do Brasil", "Français", "Deutsch", "Pусский", "Español","简体中文","繁体中文","Nederlands"];
let fallbacklang;
let lang;
let currentpage;

document.addEventListener("DOMContentLoaded", initLangSelect);


//Loading the lang
let langData;
function setLang(name, page){
  localStorage.setItem("lang", name);
  initLang(page);
}

function setSelectLang(page){
  var select = document.getElementById("langselect");
  console.log("changed")
  setLang(select.value, page);
}

function initLangSelect(){
  var select = document.getElementById("langselect");
  select.innerHTML = '';
  console.log(traductionsNames)
  traductionsNames.forEach(addOption)
  select.value = lang;
}

function addOption(item, index){
  var select = document.getElementById("langselect");
  var option = document.createElement("option")
  option.value = traductions[index];
  option.innerHTML = item;
  select.appendChild(option)
}

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
