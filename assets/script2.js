$(document).ready(function () {

var questionNum = 0;
var writeQuestion = function(){
     if (questionNum < 10){
         $("#quiz").append(
        `<h2 class="question">${myQuestions[questionNum].question} </h2>
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
        <button id="check">Check answer</button>`
    )}else{
        alert("all done!")
    }
    // When the user clicks on the input the check function should run. 
    //Correct answer gives Yay! you are correct + 3 seconds, wrong answer sorry - 10 seconds
    $("input[type='radio']").click(function(){
        alert('you clicked a radio!');
    }); 
  questionNum++;
  console.log(questionNum);
}



var nextQuestion = function(){
    $(".question").remove();
    $(".answers").remove();

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



$("#submit").on('click', function(){
    nextQuestion();
    writeQuestion();
});


$("input[type='radio']").click(function(){
    alert('you clicked a radio!');
});

});