let AllowedCookies = false;

let cookie_consent = GetCookie("user_cookie_consent");
if(cookie_consent == "ENABLED")
{
    document.getElementById("acceptCookies").style.display = "none";
    AllowedCookies = true;
    SetCookie('user_cookie_consent', "ENABLED", 30);
}
else
{
    document.getElementById("acceptCookies").style.display = "flex";
    AllowedCookies = false;
}

function EnableCookies(isEnabled)
{
    if(isEnabled)
    {
        DeleteCookie('user_cookie_consent');
        SetCookie('user_cookie_consent', "ENABLED", 30);
        AllowedCookies = false;
        document.getElementById("acceptCookies").style.display = "none";
    }
    else
    {
        SetCookie('user_cookie_consent', "DISABLED", 30);
        window.history.go(-1);
    }
}
function SetCookie(Name, Value, DaysToLive = 90)
{
    const data = new Date();
    data.setTime(data.getTime() + (DaysToLive*24*60*60*1000));
    let expires = `expires=${data.toUTCString()};`;
    document.cookie = `${Name}=${Value}; ${expires}`
}
function DeleteCookie(Name)
{ SetCookie(Name, null, null); }
function GetCookie(Name)
{
    const cDec = decodeURIComponent(document.cookie);
    const cArray = cDec.split('; ');
    let result = "";
    cArray.forEach(element => {
        if(element.indexOf(Name) == 0)
        {
            result = element.substring(Name.length + 1);
        }
    });
    return result;
}