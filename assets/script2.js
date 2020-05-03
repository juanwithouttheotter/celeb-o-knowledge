$(document).ready(function () {
  // update boostrap to make more responsive, 
  // add text to the Scoreboard to ask user if they would like to try again.

    var questionNum = -1;
    var userPoints = 0;
    var counter = 180;
    if (localStorage.getItem('scores') !== null) {
        var scores = JSON.parse(localStorage.getItem('scores'));
        console.log('if conditional' + scores);
    }else {
        scores = [];
    }
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
    //delegate will look let a click happen inside of something that is gettin appended. this may help
    //is there wa way to display single digits as 00
    var countdownTimer = function () {
        const intervalId = setInterval(() => {
            var minutes = Math.floor(counter / 60);
            var seconds = counter - (minutes * 60);
            var secondsClock = (seconds < 10 ? '0' : '') + seconds;
            var time = minutes + ":" + secondsClock;
            counter -= 1;
            if (questionNum >= myQuestions.length) {
                clearInterval(intervalId);
                console.log('time has stopped');
            }
            if (counter > -1) {
                $("#timer").html('Timer : ' + time);
            } else {
                $("#timer").html('Timer : ' + time);
                clearInterval(intervalId);
                nextQuestion();
            }
        }, 1000);
    }
    var writeQuestion = function () {
        if (questionNum < myQuestions.length) {
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
            );
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
            $("#user-score").html('Your Score: ' + userPoints);
            counter -= 15;
            $("#results").append(`<div class="response"> ${myQuestions[questionNum].motivation}</div>`);
        }
    }
    var clearpage = function() {
        $(".scoreboard").remove();
        $(".question").remove();
        $(".answers").remove();
        $(".response").remove();
        $(".myScore").remove();
    }
    var nextQuestion = function () {
        clearpage();
        questionNum++;
        console.log(questionNum);
        if (questionNum >= 10 || counter <= 0) {
            $("#quiz").append(`
                <div class="myScore">
                    <h2><u>Your score!</u></h2>
                    <div>${userPoints} /10 points </div>
                    <input type="text" id="initials"/>
                </div>
            `);
            $("#submit").show();
            $("#next").hide();
        }
    }
    var viewScores = function() {
        clearpage();
        $("#quiz").append(`
            <div class="scoreboard">
                <h2><u>Top Scores</u></h2>
                <div class="top-scores"></div>
            </div>

        `);

        for (player of scores) {
            console.log(player + 'for loop in viewscores');
            $(".scoreboard").find("div[class='top-scores']").append(`
            <button type="button" class="btn btn-light" disabled>${player}</button>
            `);
        }
    }
    var endGame = function() {
        
        var initials = $(".myScore").find("input[id='initials']").val();
        var storePoints = `player: ${initials} score: ${userPoints}`;
        scores.push(storePoints);
        localStorage.setItem('scores', JSON.stringify(scores));
        console.log(scores);
        $('.myScore').find("input[id='initials']").val('');
        questionNum = -1;
        userPoints = 0;
        counter = 180;
        viewScores();
        //clearInterval(intervalId);
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

    $("#start").on('click', function() {
        $("#user-score").html('Your Score: ' + userPoints);
        $("#next").show();
        $("#start").hide();
        $("#view-scores").hide();
        nextQuestion();
        writeQuestion();
        countdownTimer();

    });
    $("#next").on('click', function() {
        nextQuestion();
        writeQuestion();

    });
    $("#submit").on('click', function() {
        $("#start").show();
        $("#submit").hide();
        $("#view-scores").show();
        endGame();
        //viewScores();
    });
    $("#view-scores").on('click',function() {
        console.log('it clicked!')
        viewScores();
    });
});