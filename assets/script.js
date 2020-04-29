$(document).ready(function () {
    $(".quiz-body").append(`    
        <div class="start">
            <h1 class="text-center">Code Quiz!</h1>
            <p class="question text-center">Are you Ready?</p>
            <div class="row">
                <div class="col-md-4 float-left"></div>
                <button type="button" class="btn btn-success btn-lg col-md-4 next">Start Quiz!</button>
                <div class="col-md-4 float-right"></div>
            </div>
        </div>
`);
    $(".next").on('click', function () {
        $(this).closest("div.start").remove();
        startCountDown();
        question1();
        alert("it clicked!");
    });

    var question1 = function () {
        $(".quiz-body").append(`
        <h1 class="text-center">Question #1</h1>
        <p class="question text-center">What are the two parts of an Array?</p>

        
        <input type="radio" id="ans1" name="question" value="0">
        <label for="ans1">interger and number</label><br>

        <input type="radio" id="ans2" name="question" value="0">
        <label for="ans2">value and number</label><br>  

        <input type="radio" id="ans3" name="question" value="0">
        <label for="ans3">verticle and numerator</label><br> 

        <input type="radio" id="ans4" name="question" value="1">
        <label for="male">value and index</label><br>

        <button type="button" class="btn btn-success check">Check Answer</button>

        
    `);
    }
// create function to check answer with button. If else, if true alert yay nextquestion if false minus time

    

    var checkAnswer = function(){
       var checkQuestion = $('input[name ="question"]');
       for(i = 0; i < checkQuestion.length; i++) {
           if(checkQuestion[i].checked){
               console.log(checkQuestion[i]);
           }
       }
    
}
$(".check").on('click', checkAnswer());


    function startCountDown() {
        var time = 300;
        var interval = setInterval(function () {
            time -= 1;
            if (time >= 0) {
                var minutes = Math.floor(time / 60);
                var seconds = time - (minutes * 60);
                var display = minutes + ' : ' + seconds;
                $("#timer").html('Timer : ' + display);
            }
            else {
                clearInterval(interval);
            }
        }, 1000);
    }
});