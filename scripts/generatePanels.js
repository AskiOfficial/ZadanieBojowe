const Panels = 
{   
    /* 
        Max length for key: 40
        Max length for value: 77
    */
    "Wstęp do Javy" : "Co to i po co?",
    "Rozpocznij przygodę z Javą" : "Instalacja środowiska oraz Javy",
    "Pierwszy program" : "Wypisywanie i syntax",
    "Komentowanie swojego kodu" : "Komentarze",
    "Przechowy waniewartości" : "Zmienne",
    "Czym jest przechowywana wartość" : "Typy danych",
    "JAVA TYPE CASTING" : "###Nie wiem jak nazwać",
    "JAVA OPERATORS" : "Operatory",
    "Nici" : "Ciągi znaków",
    "Funkcje matematyczne" : "Lekcja matematyki oraz liczby losowe",
    "Prawda czy fałsz" : "Boolean",
    "Warunek jeśli" : "Jeśli {...} W przeciwnym razie {...}",
    "Przełącznik" : "Switche",
    "Pętle" : "FOR, WHILE, CONTINUE oraz BREAK",
    "Tablice" : "Wiele wartości tego samego typu w jednym miejscu",
    
};

/*
    Generuje automatycznie panele do których będziemy potem przekierowywać
    Wystarczy podać tytuł i podtytuł w słowniku powyżej jak podane dwa przykłady
*/

const setThemHere = document.getElementById("leftMid");
const PanelsKeys = Array.from(Object.keys(Panels));

for(let i = 0; i < PanelsKeys.length; i++)
{
    let pTitle = PanelsKeys[i];
    let pSubtitle = Panels[PanelsKeys[i]];
    setThemHere.innerHTML += "<div class=\"panels\" onclick=\"SelectPanel(" + i + ")\">" +
        "<h1>" + pTitle + "</h1>" +
        "<h2>" + pSubtitle + "</h2>" +
        "</div>";
}