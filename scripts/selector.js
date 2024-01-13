let SelectedPanel = 0;

function SelectPanel(ID)
{
    const Content = document.getElementById("rightPanel");
    const Title = document.getElementById("WWWTitle");

    SelectedPanel = ID;
    Content.innerHTML = "<embed src=\"pages/" + PanelsKeys[ID] + ".html\">";
    Title.innerHTML = PanelsKeys[ID]
}
function SelectMain()
{
    const Content = document.getElementById("rightPanel");
    const Title = document.getElementById("WWWTitle");

    SelectedPanel = ID;
    Content.innerHTML = "<embed src=\"pages/starter.html\">";
    Title.innerHTML = PanelsKeys[ID]
}