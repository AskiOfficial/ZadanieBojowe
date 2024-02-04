let selectedQuestion = 0;
const _AmountOfQuestions = 5;

const ButtonPanel = document.getElementById("eButtons");
const QuestionsPanel = document.getElementById("eQuestion");
const AnswerPanel = document.getElementById("eAnswer");

const QuestionButtons = document.querySelectorAll(".eSelector");

let AssignedQuestions = { };
let AssignedAnswers = { };

Initialize();

function Initialize()
{
    for(let i = 0; i < _AmountOfQuestions; i++)
    {
        let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
        ButtonPanel.innerHTML += `<input type="button" value="${i+1}" class="eSelector" onClick="selectQuestion(${i})">`;
        AssignedQuestions[i] = QuestionsKeys[pytanie];
        console.log(pytanie);
    
        //Losowanie pytań z listy (trzeba dodać, żeby się nie powtarzały ale najpierw potrzebujemy min 20 pytań
        //w generate questions)
        // schemat pytań {"pytanie":[index poprawnej odpowiedzi, "A", "B", "C", "D"]}
    }
    selectQuestion(0);
    console.log(AssignedQuestions);
}


function selectQuestion(id)
{
    selectedQuestion = Number(id);
    QuestionsPanel.innerHTML = AssignedQuestions[Number(id)];
    const answ1 = document.getElementById("answ1");
    const answ2 = document.getElementById("answ2");
    const answ3 = document.getElementById("answ3");
    const answ4 = document.getElementById("answ4");
    answ1.innerHTML = Questions[AssignedQuestions[Number(id)]][1];
    answ2.innerHTML = Questions[AssignedQuestions[Number(id)]][2];
    answ3.innerHTML = Questions[AssignedQuestions[Number(id)]][3];
    answ4.innerHTML = Questions[AssignedQuestions[Number(id)]][4];
}
function selectAnswer(id)
{
    AssignedAnswers[selectedQuestion] = id;
}

function Verificate()
{
    Array.from(Object.values()).forEach(element => {
        
    });
}