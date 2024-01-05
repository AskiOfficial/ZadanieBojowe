let SelectedPanel = 0;

const Content = document.getElementById("rightPanel");

function SelectPanel(ID)
{
    console.log("THIS IS PAGE NUMBER " + ID)
    SelectedPanel = ID;
    Content.innerHTML = "<embed src=\"pages/" + PanelsKeys[SelectedPanel] + ".html\">"
}