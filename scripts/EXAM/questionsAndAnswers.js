let selectedQuestion = 0;

const QuestionsPanel = document.getElementById("eQuestion");
const AnswerPanel = document.getElementById("eAnswer");
const QuestionButtons = document.querySelectorAll(".eSelector");

let AssignedQuestions = { };

for(let i = 0; i < 20; i++)
{
    let pytanie = Math.floor(Math.random() * QuestionsKeys.length);
    console.log(pytanie);
    //QuestionsPanel.innerHTML += QuestionsKeys[pytanie];
    AssignedQuestions[i] = QuestionsKeys[pytanie];
    //Losowanie pytań z listy (trzeba dodać, żeby się nie powtarzały ale najpierw potrzebujemy min 20 pytań
    //w generate questions)
    // schemat pytań {"pytanie":[index poprawnej odpowiedzi, "A", "B", "C", "D"]}
}
selectQuestion(0);


function selectQuestion(id)
{
    AnswerPanel.innerHTML = "";
    QuestionsPanel.innerHTML = AssignedQuestions[id];
    for(let i = 1; i <= 3; i++)
    {
        AnswerPanel.innerHTML += Questions[QuestionsKeys[id]][i];
    }
}