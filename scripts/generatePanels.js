const Panels = 
{   
    "Wstęp do Javy" : "Co to i po co?",
    "Rozpocznij przygodę z Javą" : "Instalacja środowiska oraz Javy",
    "Pierwszy program" : "Wypisywanie i syntax",
    "Komentowanie swojego kodu" : "Komentarze",
    "Przechowywanie wartości" : "Zmienne",
    "O przechowywanych wartościach" : "Typy danych",
    "Konwersja typu" : "Przypisanie wartości jednego typu do drugiego",
    "Operatory" : "Arytmetyka",
    "Nici" : "Ciągi znaków",
    "Matematyka" : "Funkcje matematyczne oraz liczby losowe",
    "Warunki" : "Jeśli {...} W przeciwnym razie {...} oraz swich {...}",
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
    setThemHere.innerHTML += `<div class="panels" onclick="SelectPanel(${i}, false)">` +
        `<h1>${pTitle}</h1>` +
        `<h2>${pSubtitle}</h2></div>`;
}