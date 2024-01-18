let selectedPanel = -1;

function NextPage()
{
    if(selectedPanel >= -1 && selectedPanel + 1 < PanelsKeys.length) SelectPanel(selectedPanel+1);
}

function PrevPage()
{
    if(selectedPanel > 0 && selectedPanel < PanelsKeys.length) SelectPanel(selectedPanel-1);
    else if(selectedPanel == 0) SelectMain();
}

function SelectPanel(ID)
{
    const Content = document.getElementById("rightSupport");
    const Title = document.getElementById("WWWTitle");
    const Tytul = document.getElementById("tytul"); 

    selectedPanel = ID;
    Content.innerHTML = "<embed src=\"pages/" + PanelsKeys[ID] + ".html\">";
    Title.innerHTML = PanelsKeys[ID]
    Tytul.innerHTML = PanelsKeys[ID]
}
function SelectMain()
{
    const Content = document.getElementById("rightSupport");
    const Title = document.getElementById("WWWTitle");
    const Tytul = document.getElementById("tytul");

    selectedPanel = -1;
    Content.innerHTML = "<embed src=\"pages/Starter.html\">";
    Title.innerHTML = "Java Tutorial Page"
    Tytul.innerHTML = "Java Tutorial Page"
}