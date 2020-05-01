// $(document).ready(function () {
    // $(".next").on('click', function () {
    //     $(this).closest("div.start").remove();
    //     startCountDown();
    //     writeQuiz();
    // });
//This function is functional
    var writeQuiz = function () {
        var output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join('')} </div>`
            );
        
        }
        );
        $("#quiz").html(tostring);
    }

    // var showResults = function(){
    //     var answerContainers = quizContainer.querySelectorAll('.answers');
    //     var numCorrect = 0;
    //     myQuestions.forEach( (currentQuestion, questionNumber) => {
    //         var answerContainer = answerContainers[questionNumber];
    //         var selector = `input[name=question${questionNumber}]:checked`;
    //         var userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //         if(userAnswer === currentQuestion.correctAnswer){
    //             numCorrect++;
    //             answerContainers[questionNumber].style.color = 'green';
    //         }else {
    //             answerContainers[questionNumber].style.color = 'red';
    //         }
    //     });
    //     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    // }

    // var quizContainer = $("#quiz");
    // var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    //This array is read clearly through the writeQuiz function.
    var myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich",
                d: "All of the above"
            },
            correctAnswer: "c"
        },
        {
            question: "What are the parts of an array?",
            answers: {
                a: "interger and number",
                b: "value and element",
                c: "verticle and numerator",
                d: "value and index"
            },
            correctAnswer: "d"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm",
                d: "All of the above"
            },
            correctAnswer: "c"
        },
        {
            question: "JavaScript and Java are the exact same thing.",
            answers: {
                a: "True",
                b: "False",
                c: "Maybe?",
                d: "All of the above"
            },
            correctAnswer: "b"
        },
        {
            question: "How much time was take to write the JavaScript programming language?",
            answers: {
                a: "5 years",
                b: "9 months",
                c: "10 days",
                d: "7 weeks"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        },
        {
            question: "What are the parts of an array?",
            answers: {
                a: "interger and number",
                b: "value and element",
                c: "verticle and numerator",
                d: "value and index"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the proper way to call a function?",
            answers: {
                a: "var = function(){ does something}",
                b: "Hello? is this function?",
                c: "nameOfFunction();",
                d: "function === run"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        },
        {
            question: "Can a function be called within a funtion?",
            answers: {
                a: "No, it's illegal",
                b: "Yes!",
                c: "Only if you write the function within the funtion aka FuncCeption",
                d: "All of the above"
            },
            correctAnswer: "b"
        },
    ];

    writeQuiz();

    // submitButton.addEventListener('click', showResults);
    
    // function startCountDown() {
    //     var time = 300;
    //     var interval = setInterval(function () {
    //         time -= 1;
    //         if (time >= 0) {
    //             var minutes = Math.floor(time / 60);
    //             var seconds = time - (minutes * 60);
    //             var display = 'minutes: ' + minutes + ' seconds: ' + seconds;
    //             $("#timer").html('Timer : ' + display);
    //         }
    //         else {
    //             clearInterval(interval);
    //         }
    //     }, 1000);
    // }
// });