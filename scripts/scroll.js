document.documentElement.scrollTop = GetCookie("scrollPosition");

document.addEventListener("scroll", () =>
{
    console.log(document.documentElement.scrollTop)
    SetCookie("scrollPosition", document.documentElement.scrollTop, 30);
})