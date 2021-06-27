function reloadTheme(file){
  let themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.onclick = function() {
    let currentTheme = localStorage.getItem('darkMode');
    let switchToTheme = currentTheme == "true"?"false":"true";
    localStorage.setItem('darkMode', switchToTheme.toString());
    reloadTheme(file);
  }
  themeSwitcher.setAttribute("langfield", localStorage.getItem('darkMode') == "true"? "light":"dark");
  if(localStorage.getItem('darkMode') == "true"){
    if(!document.getElementById('darkThemeLink')){
      let link = document.createElement( "link" );
      link.href = "css/darkmode_supplements.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "darkThemeLink"
      document.getElementsByTagName( "head" )[0].appendChild( link );
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/header/lightmode.webp");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }else{
    if(document.getElementById('darkThemeLink')){
      document.getElementById('darkThemeLink').remove();
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/header/darkmode.webp");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }
  initLang(fileindex.indexOf(file))
}
