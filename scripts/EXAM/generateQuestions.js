const ButtonPanel = document.getElementById("eButtons");

const Questions =
{
    "Ile lat ma marek<br>" : [2, "<laber for='nigger'>NIGGER</label><input type=radio id='nigger'><br>", "XG<br>", "XH<br>"],
    "Ile bożena przyniosła ciastek<br>" : [1, "XA", "XB", "XC"]
}
const QuestionsKeys = Array.from(Object.keys(Questions));

for(let i = 0; i < 20; i++)
{
    let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
    ButtonPanel.innerHTML += `<input type="button" value="${i+1}" class="eSelector" onClick="selectQuestion(${pytanie})">`;
}