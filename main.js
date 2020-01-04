//test that it's working
var name = "tara";

//function when a user clicks on the start button

//shows the question number and score

//display the options for the current question

//display the questions

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