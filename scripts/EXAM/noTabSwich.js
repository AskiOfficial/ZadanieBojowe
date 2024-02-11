const TABSWICH_DEV_MODE = true;

let changedStie = 0;

if(GetCookie("tryAgain") == "yes" && !TABSWICH_DEV_MODE)
{
    StaredExam = false;
    document.getElementById("eWait").style.display = "flex";
    const waitDate = new Date(GetCookie("mayTryAgain"));
    console.log(waitDate);
    document.getElementById("h3try_again_in").innerHTML = `Możesz ponownie przystąpić do testu <br>${waitDate.toLocaleString()}`
}

window.addEventListener("blur", () => {
    if(StaredExam)
    {
        changedStie++;
        document.title = `Oj zjebałeś kolego! - ${changedStie}`;
        //document.getElementById("elostAudio").play();

        if(!TABSWICH_DEV_MODE)
        {
            document.getElementById("eLooser").style.display = "flex";
            
            SetCookie("tryAgain", "yes", (1/24));
    
            const data = new Date();
            data.setTime(data.getTime() + (60*60*1000));
            SetCookie("mayTryAgain", data.toUTCString(), (1/24));
        }
    }
});