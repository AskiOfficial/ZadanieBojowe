const Panels = 
{   
    /* 
        Max length for key: 40
        Max length for value: 77
    */
    "Wstęp do Javy" : "Co to i po co?",
    "Rozpocznij przygodę z Javą" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą1" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą2" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą3" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą4" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą5" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą6" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą7" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą8" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą9" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą10" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą11" : "Instalacja środowiska oraz Javy",
    "Rozpocznij przygodę z Javą12" : "Instalacja środowiska oraz Javy",
    "Example of maximum title capacityIsHir" : "Example of maximum description capacity is just over there and this isLength",
    
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