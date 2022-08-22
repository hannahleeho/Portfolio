//Creates a Quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question:"Hannah Ho is current a PhD student from:",
        answers: {
            a: "University of Southern Queensland",
            b: "James Cook University",
            c: "CQUniversity",
            d: "University of New England"
        },
        correctAnswer:"c"
    },
    {
        question:"Hannah is investigating neural activities of:",
        answers: {
            a: "Attitude",
            b: "Habit",
            c: "Identity",
            d: "Perception"
        },
        correctAnswer:"b"
    },
    {
        question: "Hannah's research skills include:",
        answers: {
            a: "Report writing and data collection",
            b: "Planning and scheduling",
            c: "Analysis of information from different sources",
            d: "All of the above"
        },
        correctAnswer: "d"
    }
    ];   

function buildQuiz(){

    // Variable to store the HTML output
    const output = [];

    for (i = 0; i < quizQuestions.length; i++){
        
        // Variable to store the list of possible answers
        const answers = [];
        
        // For each available answer to this question, add a html radio button
        for (letter in quizQuestions[i].answers){
            
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                );
            }   
    
            // Add this question and its answers to the output
            output.push (
                '<div class="question">' + quizQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
    }
    // Combine input list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

}

function showResults(){
    
    // Gather answer containers from the quiz
    var answerContainers = quizContainer.querySelectorAll('.answer');
    
    // Keep track of user's answers
    var numCorrect = 0;

    // For each question
    for (i=0; i<quizQuestions.length; i++){

        //Find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    }
    
    // If answer is correct
    if(userAnswer===quizQuestions[i].correctAnswer){

        // Add to the number of correct asnwers
        numCorrect++;

        //Colour the answer green
        answerContainers[i].style.color = 'lightgreen';
        }

        // If answer is wrong or blank
        else {

        // Colour the answers red
        answerContainers[i].style.color = 'red';
        }
    
    if (numCorrect === 0) {
        resultsContainer.innerHTML = "That wasn't your best effort - You didn't get a single answer correct.";
        }
    if (numCorrect === 1) { 
        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
        }
    if (numCorrect === 2) { 
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
        }
    if (numCorrect === 4) { 
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
        }
}

// Load Quiz
buildQuiz();

