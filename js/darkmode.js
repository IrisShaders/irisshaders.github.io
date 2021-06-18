
function reloadTheme(file){
  let themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.setAttribute("langfield", localStorage.getItem('darkMode') == "true"? "light":"dark");
  if(localStorage.getItem('acidMode') == "true") themeSwitcher.setAttribute("langfield", "acid");
  themeSwitcher.onclick = function(event) {
    if(event.shiftKey){
      let switchToTheme = localStorage.getItem('acidMode') === "true" ? "false" : "true"
      localStorage.setItem('acidMode', switchToTheme);
      reloadTheme(file);
    }else{
      let switchToTheme = localStorage.getItem('darkMode') === "true" ? "false" : "true"
      localStorage.setItem('darkMode', switchToTheme);
      reloadTheme(file);
    }
  }
  if(localStorage.getItem('acidMode') == "true"){
    if(document.getElementById('darkThemeLink')){
      document.getElementById('darkThemeLink').remove();
    }
    if(!document.getElementById('acidThemeLink')){
      let link = document.createElement( "link" );
      link.href = "css/acid.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "acidThemeLink"
      document.getElementsByTagName( "head" )[0].appendChild( link );
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/lightmode.png");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }else if(localStorage.getItem('darkMode') == "true"){
    if(document.getElementById('acidThemeLink')){
      document.getElementById('acidThemeLink').remove();
    }
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
    if(document.getElementById('darkThemeLink')){
      document.getElementById('darkThemeLink').remove();
    }
    document.getElementById("darkThemeIcon").setAttribute("src", "images/darkmode.png");
    document.getElementById("darkThemeIcon").setAttribute("srcset", "");
  }
  initLang(fileindex.indexOf(file));
}
