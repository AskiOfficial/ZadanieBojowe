let selectedQuestion = 0;
const _AmountOfQuestions = 20;

const ButtonPanel = document.getElementById("eButtons");
const QuestionsPanel = document.getElementById("eQuestion");
const AnswerPanel = document.getElementById("eAnswer");

let AssignedQuestions = { };
let AssignedAnswers = { };
    for(let i = 0; i < _AmountOfQuestions; i++)
    {
        let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
        ButtonPanel.innerHTML += `<input type="button" value="${i+1}" class="eSelector" onClick="selectQuestion(${i})">`;
        AssignedQuestions[i] = QuestionsKeys[pytanie];
        AssignedAnswers[i] = 0;
    
        //Losowanie pytań z listy (trzeba dodać, żeby się nie powtarzały ale najpierw potrzebujemy min 20 pytań
        //w generate questions)
        // schemat pytań {"pytanie":[index poprawnej odpowiedzi, "A", "B", "C", "D"]}
    }
const QuestionButtons = document.querySelectorAll(".eSelector");
selectQuestion(0);


function selectQuestion(id)
{
    if(AssignedAnswers[selectedQuestion] != 0)
        QuestionButtons[selectedQuestion].style.setProperty("--CurrentColor", "#123456");
    else
        QuestionButtons[selectedQuestion].style.setProperty("--CurrentColor", "#282828");

    const answ1 = document.getElementById("answ1");
    const answ2 = document.getElementById("answ2");
    const answ3 = document.getElementById("answ3");
    const answ4 = document.getElementById("answ4");
    const answ = document.querySelectorAll(".answ");

    answ.forEach(element => {
        element.checked = false;
    });

    if(Number(AssignedAnswers[id]) != 0)
        answ[Number(AssignedAnswers[id])-1].checked = true;

    selectedQuestion = Number(id);
    QuestionsPanel.innerHTML = AssignedQuestions[Number(id)];
    
    answ1.innerHTML = Questions[AssignedQuestions[Number(id)]][1];
    answ2.innerHTML = Questions[AssignedQuestions[Number(id)]][2];
    answ3.innerHTML = Questions[AssignedQuestions[Number(id)]][3];
    answ4.innerHTML = Questions[AssignedQuestions[Number(id)]][4];

    if(AssignedAnswers[selectedQuestion] != 0)
        QuestionButtons[selectedQuestion].style.setProperty("--CurrentColor", "#0a1e31");
    else
        QuestionButtons[selectedQuestion].style.setProperty("--CurrentColor", "#141414");
}
function selectAnswer(id)
{
    AssignedAnswers[selectedQuestion] = id;
    QuestionButtons[selectedQuestion].style.setProperty("--CurrentColor", "#123456");
    selectQuestion(selectedQuestion);
}

function Verificate()
{
    StaredExam = false;
    let correct = 0;
    for(let i = 0; i < _AmountOfQuestions; i++)
    {
        if(Questions[AssignedQuestions[i]][0] == AssignedAnswers[i])
        {
            console.log("Tak");
            correct++;
        }
        else
        {
            console.log("NIE");
        }
    }
    alert((correct / _AmountOfQuestions)*100 + "%");
}