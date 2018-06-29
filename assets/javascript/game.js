// start a timer
// show a question and a list of radio buttons
// record player's answer
// show next question and buttons, record answer, etc
// when all 10 questions answered OR when timer is up, show all 10 questions with both correct answer and player answer
// button to play again at bottom of results page
var seconds = 5;

function countdown(){
  timer = setInterval(timer, 1000);
  function timer(){
    if (seconds == 0){
      clearInterval(timer);
      alert("You're out of time!");
      gameover();
    }else if (seconds > 0){
      seconds--;
      console.log(seconds);
    }
    $("#timer").text(seconds);
  }
 }

 function gameover(){
  $('#gameplay').hide();
  $('#results').show();
}

$("button").click(function(){
  $('#preGameplay').hide();
  $('#gameplay').show();
  $('#timer').text(seconds);
  countdown();
});

