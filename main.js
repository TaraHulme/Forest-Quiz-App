//test that it's working
var name = "tara";

//function when a user clicks on the start button
function startQuiz() {
    $('#start').on('click', function(event) {
        console.log("render the question element");
        renderAQuestion();    
    }
    );

}
//shows the question number and score
function updateQuestionAndScore() {
    console.log("show question number and score")
    const html = $(`<ul>
        <li id="js-answered">Question Number: 
        ${STORE.currentQuestion + 1}/
        ${STORE.questions.length}</li>
        <li id="js-score">Score: 
        ${STORE.score}/
        ${STORE.questions.length}</li>
        </ul>`);
    $(".question-and-score").html(html);
}

//display the options for the current question

//display the questions -renderAQuestion()
function renderAQuestion() {
    console.log("showing the current question");
    let question = STORE.questions
    [STORE.currentQuestion];
    updateQuestionAndScore();
    const questionHtml = $(`
    <div>
        <form id="js-questions" class="question-form">
        <fieldset>
            <div class="row question">
                <div class="col-12">
                    <legend> ${question.question} </legend>
                </div>
            </div>

            <div class="row options">
                <div class="col-12">
                <div class="js-options"> </div>
                </div>
            </div>
    
            <div class="row">
                <div class="col-12">
                    <button type = "submit" id="answer" tabindex="5">Submit</button>
                    <button type = "button" id="next-question" tabindex="6"> Next >></button>
                </div>
            </div>
        </fieldset>
        </form>
    </div>`);
$("main").html(questionHtml);
updateOptions();
$("#next-question").hide();
}

//display results and restart quiz button

//checks whether it reached the end of questions list

//check whether the picked option is right or wrong and displays the respective message

//function to restart the quiz

function handleTreeQuiz() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleTreeQuiz);