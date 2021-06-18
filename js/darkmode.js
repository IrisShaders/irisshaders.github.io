
function reloadTheme(file){
  let themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.setAttribute("langfield", localStorage.getItem('darkMode') == "true"? "light":"dark");
  themeSwitcher.onclick = function() {
    let currentTheme = localStorage.getItem('darkMode');
    let switchToTheme = currentTheme === "true" ? "false" : "true"
    localStorage.setItem('darkMode', switchToTheme);
    reloadTheme(file);
  }
  if(localStorage.getItem('darkMode') == "true"){
    if(!document.getElementById('darkThemeLink')){
      let link = document.createElement( "link" );
      link.href = "css/darkmode_supplements.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "darkThemeLink"
      document.getElementsByTagName( "head" )[0].appendChild( link );
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/lightmode.png");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }else{
    if(document.getElementById('acidThemeLink')){
      document.getElementById('acidThemeLink').remove();
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/darkmode.png");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }
  initLang(fileindex.indexOf(file));
}
