// start a timer
// show a question and a list of radio buttons
// record player's answer
// show next question and buttons, record answer, etc
// when all 10 questions answered OR when timer is up, show all 10 questions with both correct answer and player answer
// button to play again at bottom of results page

var seconds = 120;

function countdown(){
   timer = setInterval(twoMinutes, 1000);
   function twoMinutes(){
     if (seconds === 0){
       alert("You're out of time!");
       gameover();
     }else if (seconds > 0){
       seconds--;
     }
    $("#timer").text(seconds);
    seconds--;
  }
 }





$("button").click(function(){
   $('#preGameplay').hide();
   $('#gameplay').show();
   $('#timer').text(seconds);
   console.log(seconds);
   seconds--;
   });
