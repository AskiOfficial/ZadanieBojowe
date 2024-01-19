const Questions =
{
    "Ile lat ma marek<br>" : [2, "XF", "XG", "XH"],
    "Ile bożena przyniosła ciastek<br>" : [1, "XA", "XB", "XC"]
}
const QuestionsKeys = Array.from(Object.keys(Questions));
const QuestionsPanel = document.getElementById("eButtons");

for(let i = 0; i < 20; i++)
{
    let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
    QuestionsPanel.innerHTML += `<input type="button" value="${i+1}" class="eSelector" onClick="selectQuestion(${pytanie})">`;
}
QuestionsPanel.innerHTML += `<input type="button" value="Wyślij" class="eSelector">`;