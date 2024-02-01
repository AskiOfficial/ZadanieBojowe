let cookie_consent = GetCookie("user_cookie_consent");

if(cookie_consent == "ENABLED")
{
    document.getElementById("acceptCookies").style.display = "none";
    _AllowedCookies = true;
    SetCookie('user_cookie_consent', "ENABLED", 30);
}
else
{
    document.getElementById("acceptCookies").style.display = "flex";
    _AllowedCookies = false;
}
/*
###################################################
Here Get cookies at start of running html
###################################################
*/
if(_AllowedCookies)
{
    const gottenLastLesson = Number(GetCookie("LastOpened"));
    console.log(gottenLastLesson)
    gottenLastLesson >= 0 
    ? SelectPanel(gottenLastLesson, false)
    : SelectMain(false);
}
