let changedStie = 0;

window.addEventListener("blur", () => {
    if(StaredExam)
    {
        changedStie++;
        document.title = `Oj zjebałeś kolego! - ${changedStie}`;
    }
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
    if(StaredExam)
    {
        document.title = "W trakcie testu";
    }
});