var show_menu = document.getElementById("menu-aqce");
var menubar = document.getElementById("menubar-aqce");
var add_btn = document.getElementById("add-btn-aqce");
var list_menu = document.getElementById("list_menu_aqce");
var myTimeout;
function shmenu(i) {
  if (i == 1) {
    menubar.setAttribute("style", "height: 500px;");
    myTimeout = setTimeout(() => {
      list_menu.setAttribute("style", "visibility: visible;");
    }, 1500);
    add_btn.innerHTML = `
      <button id="menu-aqce" class="menu-btn-aqce" style="display: block" onclick="shmenu(0)">
      <img src="img/close.png" class="menu-aqce" />
      </button>
      `;
  } else {
    clearTimeout(myTimeout);
    menubar.setAttribute("style", "height: 0px;");
    list_menu.setAttribute("style", "visibility: hidden;");
    add_btn.innerHTML = `
    <button
    id="menu-aqce"
    class="menu-btn-aqce"
    style="display: block"
    onclick="shmenu(1)"
  >
    <img src="img/sittings.png" class="menu-aqce menuroaqce" />
  </button>
      `;
  }
}
var add_btn_navbar = document.getElementById("add-btn-navbar-aqce");
var navbar_btn = document.getElementById("navbar-btn-aqce");
var navbar_list = document.getElementById("move-navbar-aqce");
var list_aqce = document.getElementById("list-aqce");
function shlist(i) {
  if (i == 0) {
    navbar_list.setAttribute("style", "width:90%;");
    list_aqce.setAttribute("style", "display:flex;");
    add_btn_navbar.innerHTML = `
    <button
    id="navbar-btn-aqce"
    class="menu-btn-aqce"
    style="display: block"
    onclick="shlist(1);"
    >
      <img src="img/mgo.png" class="menu-aqce" />
    </button>
    `;
  } else {
    navbar_list.setAttribute("style", "width:0%;");
    list_aqce.setAttribute("style", "display:none;");
    add_btn_navbar.innerHTML = `
    <button
    id="navbar-btn-aqce"
    class="menu-btn-aqce"
    style="display: block"
    onclick="shlist(0);"
    >
      <img src="img/m0.png" class="menu-aqce" />
    </button>
    `;
  }
}
var USE = document.getElementById("USE-aqce");
var FAQ = document.getElementById("FAQ-aqce");
var About = document.getElementById("About-aqce");
function shUSE() {
  USE.setAttribute("style", "display:block;");
  FAQ.setAttribute("style", "display:none;");
  About.setAttribute("style", "display:none;");
}
function shFAQ() {
  FAQ.setAttribute("style", "display:block;");
  USE.setAttribute("style", "display:none;");
  About.setAttribute("style", "display:none;");
}
function shAbout() {
  About.setAttribute("style", "display:block;");
  FAQ.setAttribute("style", "display:none;");
  USE.setAttribute("style", "display:none;");
}
var app = document.getElementById("app-aqce");
var alert_start = document.getElementById("alert_start_aqce");
var histatdiv_aqce = document.getElementById("histatdiv_aqce");
var Result_app = document.getElementById("Result_app-aqce");
var Writesite = document.getElementById("Writesite-aqce");
var Res = document.getElementById("Res-aqce");
var name_site = document.getElementById("name_site_aqce");
var save_name = document.getElementById("save_name_aqce");
var selece_load = document.getElementById("selece_load_aqce");
var wsv1 = document.getElementById("save1");
var wsv2 = document.getElementById("save2");
var wsv3 = document.getElementById("save3");
var wsv4 = document.getElementById("save4");
var wsv5 = document.getElementById("save5");
var wsv6 = document.getElementById("save6");
var wsv7 = document.getElementById("save7");
var wsv8 = document.getElementById("save8");
var wsv9 = document.getElementById("save9");
var wsv10 = document.getElementById("save10");
var counter_save = 0;
var counter_SaveName = 0;
function shResult_app() {
  if (app.hasAttribute("style", "display: block;")) {
    app.setAttribute("style", "display: none;");
    Result_app.setAttribute("style", "display: block;");
  }
  Res.innerHTML = Writesite.value;
  name_site.innerHTML = localStorage.getItem(selece_load.value + "n");
}
function GoBack() {
  if (Result_app.hasAttribute("style", "display: block;")) {
    Result_app.setAttribute("style", "display: none;");
    app.setAttribute("style", "display: block;");
  }
  Res.innerHTML = "";
}
function nEw() {
  Writesite.value = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      
    </style>
  </head>
  <body>
      
  <script>
      
  </script>
  </body>
  </html>`;
}
var saves_aqce = document.getElementById("saves_aqce");
var loads_aqce = document.getElementById("loads_aqce");
function Ex(i, k) {
  if (i == 0 && k == 0) {
    saves_aqce.setAttribute("style", "display:block;");
  } else if (i == 1 && k == 0) {
    saves_aqce.setAttribute("style", "display:none;");
  } else if (i == 0 && k == 1) {
    loads_aqce.setAttribute("style", "display:block;");
  } else {
    loads_aqce.setAttribute("style", "display:none;");
  }
}
if (localStorage.getItem("counter_save") > 1) {
  counter_save = localStorage.getItem("counter_save");
}
if (localStorage.getItem("counter_SaveName") > 1) {
  counter_SaveName = localStorage.getItem("counter_SaveName");
}
function save() {
  if (counter_save > 10) {
    alert("Sorry, memory is full");
    counter_save = 0;
    localStorage.setItem("counter_save", counter_save);
    counter_SaveName = 0;
    localStorage.setItem("counter_SaveName", counter_SaveName);
  } else {
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
    localStorage.setItem("counter_save", selece_load.value);
    localStorage.setItem("counter_SaveName", selece_load.value);
    if (counter_save == 1) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv1.innerHTML = save_name.value;
    } else if (counter_save == 2) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv2.innerHTML = save_name.value;
    } else if (counter_save == 3) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv3.innerHTML = save_name.value;
    } else if (counter_save == 4) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv4.innerHTML = save_name.value;
    } else if (counter_save == 5) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv5.innerHTML = save_name.value;
    } else if (counter_save == 6) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv6.innerHTML = save_name.value;
    } else if (counter_save == 7) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv7.innerHTML = save_name.value;
    } else if (counter_save == 8) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv8.innerHTML = save_name.value;
    } else if (counter_save == 9) {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv9.innerHTML = save_name.value;
    } else {
      localStorage.setItem(counter_SaveName + "n", save_name.value);
      localStorage.setItem(counter_save, Writesite.value);
      wsv10.innerHTML = save_name.value;
    }
  }
}
function load() {
  Writesite.value = localStorage.getItem(selece_load.value);
  counter_save = selece_load.value;
  counter_SaveName = selece_load.value;
  localStorage.setItem("counter_save", selece_load.value);
  localStorage.setItem("counter_SaveName", selece_load.value);
}
function Delete_Save() {
  if (selece_load.value == 1) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv1.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 2) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv2.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 3) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv3.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 4) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv4.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 5) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv5.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 6) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv6.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 7) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv7.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 8) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv8.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 9) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv9.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  } else if (selece_load.value == 10) {
    localStorage.removeItem(selece_load.value);
    localStorage.removeItem(selece_load.value + "n");
    wsv10.innerHTML = "-";
    counter_save = selece_load.value;
    counter_SaveName = selece_load.value;
  }
}
function Delete() {
  Writesite.value = "";
}
function histart() {
  alert_start.setAttribute("style", "display:none;");
  app.setAttribute("style", "opacity: 1;");
}
onload = () => {
  if (localStorage.getItem("1n") != null) {
    wsv1.innerHTML = localStorage.getItem("1n");
  }
  if (localStorage.getItem("2n") != null) {
    wsv2.innerHTML = localStorage.getItem("2n");
  }
  if (localStorage.getItem("3n") != null) {
    wsv3.innerHTML = localStorage.getItem("3n");
  }
  if (localStorage.getItem("4n") != null) {
    wsv4.innerHTML = localStorage.getItem("4n");
  }
  if (localStorage.getItem("5n") != null) {
    wsv5.innerHTML = localStorage.getItem("5n");
  }
  if (localStorage.getItem("6n") != null) {
    wsv6.innerHTML = localStorage.getItem("6n");
  }
  if (localStorage.getItem("7n") != null) {
    wsv7.innerHTML = localStorage.getItem("7n");
  }
  if (localStorage.getItem("8n") != null) {
    wsv8.innerHTML = localStorage.getItem("8n");
  }
  if (localStorage.getItem("9n") != null) {
    wsv9.innerHTML = localStorage.getItem("9n");
  }
  if (localStorage.getItem("10n") != null) {
    wsv10.innerHTML = localStorage.getItem("10n");
  }
};
