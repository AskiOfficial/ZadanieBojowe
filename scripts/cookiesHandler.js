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