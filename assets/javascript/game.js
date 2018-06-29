// start a timer
// show a question and a list of radio buttons
// record player's answer
// show next question and buttons, record answer, etc
// when all 10 questions answered OR when timer is up, show all 10 questions with both correct answer and player answer
// button to play again at bottom of results page
var seconds = 5;
var questionArray = [
`What name did Hanks give the one friend he had on the island in <i>Castaway</i>?`,//1
`"There's no crying _______________!"`,//2
`Which U.S. President did Hanks NOT meet in <i>Forrest Gump</i>?`,//3
`In <i>Big</i>, Hanks makes a wish at a carnival fortune teller to be "big" so that he could ride a roller coaster with a girl he had a crush on. What was the name of the fortune teller?`,//4
`In <i>The Burbs</i>, what piece of evidence did Hanks find in his neighbor's house that led him to suspect them of murder? <br> Hint: he hid it in his shorts.`,//5
`What was the name of the record label Hanks represented in <i>That Thing You Do</i>?`,//6
`In <i>Saving Private Ryan</i>, what did Hanks do for a living prior to World War II?`,//7
`Which is NOT a line Woody (voiced by Hanks) says via pullstring in the Toy Story movies?`,//8
`What was the name of Hanks' character in <i>Catch Me If You Can</i>?`,//9
`Which of these Hanks characters was NOT based a biographical figure?`//10
];
var answerArray = [
  [`Brian`,`Wilson`,`Bubba`,`Tom`],//1
  [`here`,`over spilled milk`,`about this`,`in baseball`],//2
  [`John Kennedy`,`Lyndon Johnson`,`Richard Nixon`,`Ronald Reagan`],//3
  [`Genie`,`Zoltar`,`Wizard`,`Wishy`],//4
  [`a photograph`,`a toupee`,`a bone`,`a half-eaten hot dog`],//5
  [`Pop-Tone`,`Ring-Tone`,`Play-Tone`,`Barry-tone`],//6
  [`Teacher`,`Artist`,`Engineer`,`Lumberjack`],//7
  [`"There's a snake in my boot!"`,`"Somebody's poisoned the waterhole!"`,`"Reach for the sky!"`,`"Well isn't that a dandy!"`],//8
  [`Carl Handratty`,`Thomas Tophopper`,`William Piccadilly`,`Jimmy Dinglehopper`],//9
  [`an astronaut`,`an airline pilot`,`a train conductor`,`a ship captain`]//10
  ];

var playerAnswerArray = [];
var correctAnswerArray = [`Wilson`,`in baseball`,`Ronald Reagan`,`Zoltar`,`a toupee`,`Play-Tone`,`Teacher`,`"Well isn't that a dandy!"`,`Carl Handratty`,`a train conductor`];
var questionCounter = 0;

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

function questionsAndAnswers(){
  $('#question').html(questionArray[questionCounter]);
  $('#answer1').html(answerArray[questionCounter][0]);
  $('#answer2').html(answerArray[questionCounter][1]);
  $('#answer3').html(answerArray[questionCounter][2]);
  $('#answer4').html(answerArray[questionCounter][3]);
  $('#progress').text(questionCounter+1);
}

$("button").click(function(){
  $('#preGameplay').hide();
  $('#gameplay').show();
  $('#timer').text(seconds);
  countdown();
  questionsAndAnswers();
});

