//test that it's working
// var name = "tara";

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
function updateOptions() {
    let question = STORE.questions[STORE.currentQuestion];
    for (let i=0; i<question.options.length; i++) {
        $('main .js-options').append(`
        <input type= "radio" name= "options" id= "option${i+1}" value = "${question.options[i]}" tabindex="${i+1}" required>
        <label for= "option${i+1}"> ${question.options[i]}</label> 
        <br/>
        <span id="js-r${i+1}"></span>
        `)
    }
}

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
function displayResults() {
    let resultHtml = $(`
        <div class="results">
            <form id="js-restart-quiz">
                <fieldset>
                    <div class="row">
                        <div class="col-12">
                            <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
                         </div>
                     </div>
                     <div class="row">
                        <div class="col-12">
                            <button type="button" id="restart"> Restart Quiz</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>`);
        STORE.currentQuestion = 0;
        STORE.score = 0;
    $("main").html(resultHtml);
}
//checks whether it reached the end of questions list
function handleQuestions() {
    $('body').on('click', '#next-question', (event) => {
        STORE.currentQuestion === STORE.questions.length?
        displayResults() : renderAQuestion();
    });
}
//check whether the picked option is right or wrong and displays the respective message
function handleSelectOption() {
    $('body').on("submit", function(event) {
        event.preventDefault();
        let currentQues = STORE.questions[STORE.currentQuestion];
        let selectedOption = $("input[name=options]:checked").val();
        
        let id_num = currentQues.options.findIndex(i => i === selectedOption);
        let id = "#js-r" + ++id_num;
        $('span').removeClass("right-answer wrong-answer");
        if(selectedOption === currentQues.answer) {
            STORE.score++;
            $(`${id}`).append(`Yep! That's right<br/>`);
            $(`${id}`).addClass("right-answer");
        }
        else {
            $(`${id}`).append(`Oops! You got it wrong<br/> The answer is "${currentQues.answer}"<br/>`);
            $(`${id}`).addClass("wrong-answer");
        }

        STORE.currentQuestion++;
        $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
        $('#answer').hide();
        $("input[type=radio]").attr('disabled', true);
        $('#next-question').show();
    });
}
//function to restart the quiz
function restartQuiz() {
    $('body').on('click', '#restart', (event) => {
        renderAQuestion();
    });
}

function handleTreeQuiz() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleTreeQuiz);