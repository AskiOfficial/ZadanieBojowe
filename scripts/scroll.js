document.documentElement.scrollTop = GetCookie("scrollPosition");

document.addEventListener("scroll", () => {
    SetCookie("scrollPosition", document.documentElement.scrollTop, 30); 
    
})
