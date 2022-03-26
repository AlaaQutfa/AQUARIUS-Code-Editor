var editepage = document.getElementById("edit");
var codes = document.getElementById("code");
var play = document.getElementById("btn-code-run");
var remove = document.getElementById("btn-code-delete");
var result = document.getElementById("code-view");
var save = document.getElementById("btn-code-return");
var load = document.getElementById("btn-code-load");
var add = document.getElementById("btn-code-addelement");
var clean = document.getElementById("btn-code-clean");
var mood = document.getElementById("mood");
function chlang(){
    let lang = document.getElementById("lang");
    let logo1 = document.getElementById("logo1");
    let logo2 = document.getElementById("logo2");
    let contact =document.getElementById("contact");
    let writehere =document.getElementById("article-title1");
    let Settings = document.getElementById("Settings");
    let Chooselanguage=document.getElementById("Chooselanguage");
    let arabic = document.getElementById("arabic");
    let english = document.getElementById("english");
    let german = document.getElementById("german");
    let Choosemood=document.getElementById("Choosemood");
    let darkmood=document.getElementById("darkmood");
    let lightmood=document.getElementById("lightmood");
    let Fontcolor=document.getElementById("Font-color");
    let red =document.getElementById("red");
    let blue =document.getElementById("blue");
    let green =document.getElementById("green");
    let black =document.getElementById("black");
    let white =document.getElementById("white");
    let fontsize =document.getElementById("fontsize");
    let small=document.getElementById("small");
    let medium=document.getElementById("medium");
    let large=document.getElementById("large");
    if(lang.value == "arabic"){
        logo1.innerHTML = "أكواريوس" ;
        logo2.innerHTML = "محرر-اكواد";
        contact.innerHTML= ":تواصل معنا";
        writehere.innerHTML= " :اكتب هنا:";
        Settings.innerHTML= " الاعدادات";
        Chooselanguage.innerHTML= ":اختر لغة";
        arabic.innerHTML= " العربية";
        english.innerHTML= " الانكليزية";
        german.innerHTML= " الالمانية";
        Choosemood.innerHTML= " اختر وضع";
        darkmood.innerHTML= " وضع ليلي";
        lightmood.innerHTML= "وضع نهاري";
        Fontcolor.innerHTML=" اختر لون الخط:" ;
        red.innerHTML= "الاحمر";
        blue.innerHTML="الازرق" ;
        green.innerHTML= "الاخضر";
        black.innerHTML= "الاسود";
        white.innerHTML= "الابيض";
        fontsize.innerHTML= "اختر حجم الخط:";
        small.innerHTML= "صغير";
        medium.innerHTML= "متوسط";
        large.innerHTML= "كبير";
        editepage.innerHTML= "تطبيق";
        play.innerHTML= "النتيجة";
        remove.innerHTML= "عودة";
        save.innerHTML="حفظ" ;
        load.innerHTML= "تحميل";
        add.innerHTML="اضف العناصر" ;
        clean.innerHTML= "حذف الكل";
    }
    else if(lang.value == "german"){
        logo1.innerHTML = "AQUARIUS" ;
        logo2.innerHTML = "CODE-EDITOR" ;
        contact.innerHTML="kontaktiere uns:" ;
        writehere.innerHTML= "Hier schreiben:";
        Settings.innerHTML="Einstellungen :" ;
        Chooselanguage.innerHTML="Sprache wählen:" ;
        arabic.innerHTML="Arabisch" ;
        english.innerHTML= "Englisch";
        german.innerHTML="Deutsch" ;
        Choosemood.innerHTML= "Wähle Stimmung:";
        darkmood.innerHTML="Dunkle Stimmung" ;
        lightmood.innerHTML="leichte Stimmung" ;
        Fontcolor.innerHTML= "Schriftfarbe wählen:";
        red.innerHTML= "Rot";
        blue.innerHTML= "Blau";
        green.innerHTML= "Grün";
        black.innerHTML= "Schwarz";
        white.innerHTML= "Weiß";
        fontsize.innerHTML= "Schriftgröße wählen:";
        small.innerHTML= "klein";
        medium.innerHTML= "Mittel";
        large.innerHTML= "Groß";
        editepage.innerHTML= "Sparen";
        play.innerHTML= "Ergebnis";
        remove.innerHTML= "Rückkehr";
        save.innerHTML= "Sparen";
        load.innerHTML= "Belastung";
        add.innerHTML= "Elemente hinzufügen";
        clean.innerHTML= "Alles löschen";
    }
    else{
        logo1.innerHTML = "AQUARIUS" ;
        logo2.innerHTML = "Code-Editor" ;
        contact.innerHTML= "Contact Uc:";
        writehere.innerHTML="Write here:" ;
        Settings.innerHTML="Settings:" ;
        Chooselanguage.innerHTML= "Choose language:";
        arabic.innerHTML= "Arabic";
        english.innerHTML= "English";
        german.innerHTML= "German";
        Choosemood.innerHTML="Choose mood:" ;
        darkmood.innerHTML= "Dark";
        lightmood.innerHTML= "Light";
        Fontcolor.innerHTML= "Choose Font-color:";
        red.innerHTML= "Red";
        blue.innerHTML= "Blue";
        green.innerHTML= "Green";
        black.innerHTML= "Black";
        white.innerHTML= "White";
        fontsize.innerHTML= "Choose font-size:";
        small.innerHTML= "Small";
        medium.innerHTML= "Medium";
        large.innerHTML= "Large";
        editepage.innerHTML= "Save";
        play.innerHTML= "Result";
        remove.innerHTML= "Return";
        save.innerHTML= "Save";
        load.innerHTML= "Load";
        add.innerHTML= "Add elements";
        clean.innerHTML= "Clear all";
    }
}
function chmood(){
    
    if(mood.value == "dark" ){
        document.head.innerHTML += `<style>
        button{
            background: #000016;
            color: white !important;
        }
        #code{
            background:#000000ba;
        }
        select{
            background: #000016;
            color: white;
        }
        </style>`;
    }
    else{
        document.head.innerHTML += `<style>
        button{
            background: white;
            color: black !important;
        }
        #code{
            background: #ffffff6b;
        }
        select{
            background: white;
            color: black;
        }
        </style>`;
    }
}
function chfontsize(){
    let fontsize = document.getElementById("size");
    if(fontsize.value == "small"){
        codes.setAttribute("style","font-size: small;")
    }else if(fontsize.value == "medium"){
        codes.setAttribute("style","font-size: medium;")
    }else{
        codes.setAttribute("style","font-size: large;")
    }
}
function chfontcolor(){
    let fontcolor = document.getElementById("color");
    if(fontcolor.value == "red"){
        document.head.innerHTML+=`
        <style>
        #code{
            color:red;
        }
        </style>    
        `;
    }else if(fontcolor.value == "blue"){
        document.head.innerHTML+=`
        <style>
        #code{
            color:blue;
        }
        </style>    
        `;
    }else if(fontcolor.value == "green"){
        document.head.innerHTML+=`
        <style>
        #code{
            color:green;
        }
        </style>    
        `;
    }else if(fontcolor.value == "white"){
        document.head.innerHTML+=`
        <style>
        #code{
            color:white;
            background-color: #ffffff6b;
        }
        </style>    
        `;
    }else{
        document.head.innerHTML+=`
        <style>
        #code{
            color:black;
        }
        </style>    
        `;
    }
}
editepage.onclick = ()=>{
    chlang();
    chmood();
    chfontcolor();
    chfontsize();
};
play.onclick = ()=>{
    if(result.hasAttribute("style","display:none;")){
        result.setAttribute("style", "display:block;");
        codes.setAttribute("style","display: none;");
    }
    result.innerHTML = codes.value;
};
remove.onclick = () =>{
    if(result.hasAttribute("style","display:block;")){
        result.setAttribute("style", "display:none;");
        codes.setAttribute("style","display: block;");
    }
    result.innerHTML = " ";
};
save.onclick = () =>{
    localStorage.setItem("Result" , codes.value);
};
load.onclick = () =>{
    codes.value = localStorage.getItem("Result" , codes.value);
};
add.onclick = () =>{
    codes.value = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DOCUMENT:</title>
                <style>
                    
                </style>
        </head>
        <body>
        
            <script>
                
            </script>
        </body>
</html>
`;
};
clean.onclick = () =>{
    codes.value = " ";
};
