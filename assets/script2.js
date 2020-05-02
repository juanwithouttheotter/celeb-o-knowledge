$(document).ready(function () {
    var questionNum = -1;
    var userPoints = 0;
    var counter = 300;
    $("#next").hide();
    $("#submit").hide();
    $("#quiz").append(`
        <h2 class="question">Coding Quiz!</h2>
        <div Class="answers">
            <p>For this quiz expect the following:</p>
            <ol>
                <li>You will have 5 minutes to complete the coding quiz.</li>
                <li>Once you click on an answer, you will not be able to change answers.</li>
                <li>Your progress will be tracked at the top of the screen.</li>
                <li>At the end of the quiz or if you run out of time you will receive and be able to record your results.</li>
            </ol>
            <p>Click the start button to begin</p>
        </div>
        `)

    var writeQuestion = function () {
        if (questionNum < 10) {
            $("#quiz").append(`
                <h2 class="question">${myQuestions[questionNum].question} </h2>
                <div class="answers">
                    <label>
                        <input type="radio" name="question" value="a">A: ${myQuestions[questionNum].answers.a}
                    </label><br>
                    <label>
                        <input type="radio" name="question" value="b">B: ${myQuestions[questionNum].answers.b}
                    </label><br>
                    <label>
                        <input type="radio" name="question" value="c">C: ${myQuestions[questionNum].answers.c}
                    </label><br>
                    <label>
                        <input type="radio" name="question" value="d">D: ${myQuestions[questionNum].answers.d}
                    </label><br>
                </div>`
            )
        } else {
            alert("all done!")
        }
        $("input[type='radio']").click(function () {
            $('input[name="question"]:not(:checked)').attr("disabled", true);
            checkAnswer();
        });
    }

    var checkAnswer = function () {
        var userAnswer = $("input[name='question']:checked").val();
        var correctAnswer = myQuestions[questionNum].correctAnswer;
        if (userAnswer === correctAnswer) {
            userPoints++;
            $("#user-score").html('Your Score: ' + userPoints);
            $("#results").append(`<div class="response"> ${myQuestions[questionNum].cheer}</div>`);
        } else {
            counter -= 15;
            $("#results").append(`<div class="response"> ${myQuestions[questionNum].motivation}</div>`);

        }
    }
    //delegate will look let a click happen inside of something that is gettin appended. this may help

   
    //when timer runs out || questions are answered End screen. 
    //game ends take user input and record score it Score div

    //is there wa way to display single digits as 00

    var countdownTimer = function () {
        const intervalId = setInterval(() => {
            var minutes = Math.floor(counter / 60);
            var seconds = counter - (minutes * 60);
            var time = minutes + ":" + seconds;
            counter -= 1;

            //   if (counter > 250) {
            //    counter -= 10;
            //   }
            //   if (counter === 20) {
            //     counter += 17;
            //   }
            if (counter >= 0) {
                $("#timer").html('Timer : ' + time);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    var nextQuestion = function () {
        $(".question").remove();
        $(".answers").remove();
        $(".response").remove();
        questionNum++;

    }
    var myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich",
                d: "All of the above"
            },
            correctAnswer: "c",
            cheer: "You are a Genius!",
            motivation: "Womp, womp... maybe next time."
        },
        {
            question: "Where can a variable that is set inside of a function be used?",
            answers: {
                a: "in a neighboring function",
                b: "in the global scope that the function belongs to.",
                c: "in the function that is is set in",
                d: "in any function that has a variable set with the same name"
            },
            correctAnswer: "c",
            cheer: "Great Job!",
            motivation: "Try taking notes next time."
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm",
                d: "All of the above"
            },
            correctAnswer: "c",
            cheer: "Fantastic!",
            motivation: "I too got this wrong..."
        },
        {
            question: "JavaScript and Java are the exact same thing.",
            answers: {
                a: "True",
                b: "False",
                c: "Maybe?",
                d: "All of the above"
            },
            correctAnswer: "b",
            cheer: "Huzah!",
            motivation: "There's a developer somewhere in the world, crying."
        },
        {
            question: "How much time was take to write the JavaScript programming language?",
            answers: {
                a: "5 years",
                b: "9 months",
                c: "10 days",
                d: "7 weeks"
            },
            correctAnswer: "c",
            cheer: "Awesome!",
            motivation: "Nope!"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d",
            cheer: "Yay!",
            motivation: "Erm... how does one say wrong, politely..."
        },
        {
            question: "What are the parts of an array?",
            answers: {
                a: "interger and number",
                b: "value and element",
                c: "verticle and numerator",
                d: "value and index"
            },
            correctAnswer: "d",
            cheer: "Correct!",
            motivation: "Not quite right"
        },
        {
            question: "What is the proper way to call a function?",
            answers: {
                a: "var = function(){ does something}",
                b: "Hello? is this function?",
                c: "nameOfFunction();",
                d: "function === run"
            },
            correctAnswer: "c",
            cheer: "Correct-o-mundo!",
            motivation: "you are In-correct."
        },
        {
            question: "which is a complex variable?",
            answers: {
                a: "string",
                b: "boolean",
                c: "integer",
                d: "array"
            },
            correctAnswer: "d",
            cheer: "Why Hello, Code Genius!",
            motivation: "that is one big, Nope!"
        },
        {
            question: "Can a function be called within a funtion?",
            answers: {
                a: "No, it's illegal",
                b: "Yes!",
                c: "Only if you write the function within the funtion aka FuncCeption",
                d: "All of the above"
            },
            correctAnswer: "b",
            cheer: "Super Correct!",
            motivation: "Anti-nega-contra correct, aka wrong."
        },
    ];

    //rename this click to start then hide

    $("#start").on('click', function () {
        $("#next").show();
        $("#start").hide();
        nextQuestion();
        writeQuestion();
        countdownTimer();
        
    });
    $("#next").on('click', function () {
        nextQuestion();
        writeQuestion();

    });
    $("#submit").on('click', function () {


    });
});