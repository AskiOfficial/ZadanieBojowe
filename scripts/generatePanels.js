const Panels = 
{   
    /* 
        Max length for key: 40
        Max length for value: 77
    */
    "Example of maximum title capacityIsHere" : "Example of maximum description capacity is just over there and this isLength",
    "Starting page" : "Let's get started",
    "Public static void main" : "String[] arg",
};

/*
    Generuje automatycznie panele do których będziemy potem przekierowywać
    Wystarczy podać tytuł i podtytuł w słowniku powyżej jak podane dwa przykłady
*/

const setThemHere = document.getElementById("leftPanel");
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