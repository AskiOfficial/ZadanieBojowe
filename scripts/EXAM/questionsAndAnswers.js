let selectedQuestion = 0;
const _AmountOfQuestions = 20;

const ButtonPanel = document.getElementById("eButtons");
const QuestionsPanel = document.getElementById("eQuestion");
const AnswerPanel = document.getElementById("eAnswer");

const AnswerDIVs = document.querySelectorAll(".eA");

let AssignedQuestions = { };
let AssignedAnswers = { };
    for(let i = 0; i < _AmountOfQuestions; i++)
    {
        let Exist = true;
        ButtonPanel.innerHTML += `<input type="button" value="${i+1}" class="eSelector" onClick="selectQuestion(${i})">`;

        while (Exist) {
            let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
            AssignedAnswers[i] = 0;
        
            Exist = false;
        
            for (let key in AssignedQuestions)
            {
                if (AssignedQuestions[key] == QuestionsKeys[pytanie]) 
                {
                    Exist = true;
                    break;
                }
            }
        
            if (!Exist) AssignedQuestions[i] = QuestionsKeys[pytanie];
        }
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

    if(Questions[AssignedQuestions[Number(id)]][3] == "#*#")
        AnswerDIVs[2].style.display = "none";
    else
    {
        AnswerDIVs[2].style.display = "flex";
        answ3.innerHTML = Questions[AssignedQuestions[Number(id)]][3];
    }

    if(Questions[AssignedQuestions[Number(id)]][4] == "#*#")
        AnswerDIVs[3].style.display = "none";
    else
    {
        AnswerDIVs[3].style.display = "flex";
        answ4.innerHTML = Questions[AssignedQuestions[Number(id)]][4];
    }

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