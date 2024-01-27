const leftPanel = document.getElementById('leftPanel');
const button = document.getElementById('toggleButton');
const panels = document.querySelectorAll(".panel");

let slide = false;

function lol()
{
    if(slide)
    {
        leftPanel.style.animation = "slideOut 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards";
        slide = false
    }
    else
    {
        leftPanel.style.animation = "slideIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards";
        slide = true
    }
    // slide = !slide;
}

button.addEventListener('click', lol);