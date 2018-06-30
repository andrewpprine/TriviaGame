// record player's answer 
// show next question/answer, record answer, etc
// when all 10 questions answered OR when timer is up, show number of player's correct answers, all 10 questions with both correct answer, and player answer

var seconds = 120;
var allQuestionsAndAnswers = [
  { //1
    question: `What name did Hanks give the one friend he had on the island in <i>Castaway</i>?`,
    choices: [`Brian`,`Wilson`,`Bubba`,`Tom`],
    answer: `Wilson`,
    image: `<img src='assets/images/answer1.jpg' width='300' height='300'>`
  },
  { //2
    question: `"There's no crying _______________!"`,
    choices: [`here`,`over spilled milk`,`about this`,`in baseball`],
    answer: `in baseball`,
    image: `<img src='assets/images/answer2.jpg' width='300' height='300'>`
  },
  { //3
    question: `Which U.S. President did Hanks NOT meet in <i>Forrest Gump</i>?`,
    choices: [`John Kennedy`,`Lyndon Johnson`,`Richard Nixon`,`Ronald Reagan`],
    answer: `Ronald Reagan`,
    image: `<img src='assets/images/answer3.jpg' width='300' height='300'>`
  },
  { //4
    question: `In <i>Big</i>, Hanks makes a wish at a carnival fortune teller to be "big" so that he could ride a roller coaster with a girl he had a crush on. What was the name of the fortune teller?`,
    choices: [`Genie`,`Zoltar`,`Wizard`,`Wishy`],
    answer: `Zoltar`,
    image: `<img src='assets/images/answer4.jpg' width='300' height='300'>`
  },
  { //5
    question: `In <i>The Burbs</i>, what piece of evidence did Hanks find in his neighbor's house that led him to suspect them of murder? <br> Hint: he hid it in his shorts.`,
    choices: [`a photograph`,`a toupee`,`a bone`,`a half-eaten hot dog`],
    answer: `a toupee`,
    image: `<img src='assets/images/answer5.jpg' width='300' height='300'>`
  },
  { //6
    question: `What was the name of the record label Hanks represented in <i>That Thing You Do</i>?`,
    choices: [`Pop-Tone`,`Ring-Tone`,`Play-Tone`,`Barry-tone`],
    answer: `Play-Tone`,
    image: `<img src='assets/images/answer6.jpg' width='300' height='300'>`
  },
  { //7
    question: `In <i>Saving Private Ryan</i>, what did Hanks do for a living prior to World War II?`,
    choices: [`Teacher`,`Artist`,`Engineer`,`Lumberjack`],
    answer: `Teacher`,
    image: `<img src='assets/images/answer7.jpg' width='300' height='300'>`
  },
  { //8
    question: `Which is NOT a line Woody (voiced by Hanks) says via pullstring in the Toy Story movies?`,
    choices: [`"There's a snake in my boot!"`,`"Somebody's poisoned the waterhole!"`,`"Reach for the sky!"`,`"Well isn't that a dandy!"`],
    answer: `"Well isn't that a dandy!"`,
    image: `<img src='assets/images/answer8.jpg' width='300' height='300'>`
  },
  { //9
    question: `What was the name of Hanks' character in <i>Catch Me If You Can</i>?`,
    choices: [`Carl Handratty`,`Thomas Tophopper`,`William Piccadilly`,`Jimmy Dinglehopper`],
    answer: `Carl Handratty`,
    image: `<img src='assets/images/answer9.jpg' width='300' height='300'>`
  },
  { //10
    question: `Which of these Hanks characters was NOT based a biographical figure?`,
    choices: [`an astronaut`,`an airline pilot`,`a train conductor`,`a ship captain`],
    answer: `a train conductor`,
    image: `<img src='assets/images/answer10.jpg' width='300' height='300'>`
  }
]
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
var imageArray = [
  `<img src='assets/images/answer1.jpg' width='300' height='300'>`,//1
  `<img src='assets/images/answer2.jpg' width='300' height='300'>`,//2
  `<img src='assets/images/answer3.jpg' width='300' height='300'>`,//3
  `<img src='assets/images/answer4.jpg' width='300' height='300'>`,//4
  `<img src='assets/images/answer5.jpg' width='300' height='300'>`,//5
  `<img src='assets/images/answer6.jpg' width='300' height='300'>`,//6
  `<img src='assets/images/answer7.jpg' width='300' height='300'>`,//7
  `<img src='assets/images/answer8.jpg' width='300' height='300'>`,//8
  `<img src='assets/images/answer9.jpg' width='300' height='300'>`,//9
  `<img src='assets/images/answer10.jpg' width='300' height='300'>`//10
]
var correctAnswerArray = [`Wilson`,`in baseball`,`Ronald Reagan`,`Zoltar`,`a toupee`,`Play-Tone`,`Teacher`,`"Well isn't that a dandy!"`,`Carl Handratty`,`a train conductor`];
var playerAnswerArray = [];
var questionCounter = 0;


var currentQuizItem = $('#question').html(allQuestionsAndAnswers[questionCounter].question+
  `<br><br>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[0]+`</button>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[1]+`</button>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[2]+`</button>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[3]+`</button>`+
  `<br><br>`+
  allQuestionsAndAnswers[questionCounter].image);


// var currentQuestion = $('#question').html(questionArray[questionCounter]+'<br><br>');
// var currentAnswer = $('#answer1').html(answerArray[questionCounter][0]);$('#answer2').html(answerArray[questionCounter][1]);$('#answer3').html(answerArray[questionCounter][2]);$('#answer4').html(answerArray[questionCounter][3]);
// var currentImage = $('#image').html(imageArray[questionCounter]);
var correctAnswers = 0;
var incorrectAnswers = 0;
var tryAgain = `<button id='tryagain' href='#' onClick="window.location.reload();return false";>Try Again!</button>`

function countdown(){ //the countdown clock and when to kill or continue it
  timer = setInterval(timer, 1000);
  function timer(){
    if (seconds == 0){ //if timer runs out then game is over
      clearInterval(timer);
      alert("You're out of time!");
      gameover();
    }else if (seconds > 0){//if there is time left, then continue the timer
      seconds--;
    }
    if(questionCounter>=10){//stops timer if all questions have been answered, regardless of time left
      clearInterval(timer);
    }
    $("#timer").text(seconds);
  }
 }
 
function gameover(){
  $('#gameplay').hide();
  $('#results').show();
  $(`#correctAnswerNumber`).text(correctAnswers);
  $('#resultsRecap').html(`<hr style: color='red'><br>`+allQuestionsAndAnswers[0].question+`<br>Correct answer: `+allQuestionsAndAnswers[0].answer+`<br><br>`+allQuestionsAndAnswers[0].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[1].question+`<br>Correct answer: `+allQuestionsAndAnswers[1].answer+`<br><br>`+allQuestionsAndAnswers[1].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[2].question+`<br>Correct answer: `+allQuestionsAndAnswers[2].answer+`<br><br>`+allQuestionsAndAnswers[2].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[3].question+`<br>Correct answer: `+allQuestionsAndAnswers[3].answer+`<br><br>`+allQuestionsAndAnswers[3].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[4].question+`<br>Correct answer: `+allQuestionsAndAnswers[4].answer+`<br><br>`+allQuestionsAndAnswers[4].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[5].question+`<br>Correct answer: `+allQuestionsAndAnswers[5].answer+`<br><br>`+allQuestionsAndAnswers[5].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[6].question+`<br>Correct answer: `+allQuestionsAndAnswers[6].answer+`<br><br>`+allQuestionsAndAnswers[6].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[7].question+`<br>Correct answer: `+allQuestionsAndAnswers[7].answer+`<br><br>`+allQuestionsAndAnswers[7].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[8].question+`<br>Correct answer: `+allQuestionsAndAnswers[8].answer+`<br><br>`+allQuestionsAndAnswers[8].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[9].question+`<br>Correct answer: `+allQuestionsAndAnswers[9].answer+`<br><br>`+allQuestionsAndAnswers[9].image+`<br><br><hr style: color ='red'><br>`
  // questionArray[0]+`<br><br>Your answer: `+playerAnswerArray[0]+`<br>Correct answer: `+correctAnswerArray[0]+`<br><br>`+imageArray[0]+`<br><br><hr style: color='red'><br>`+questionArray[1]+`<br><br>Your answer: `+playerAnswerArray[1]+`<br>Correct answer: `+correctAnswerArray[1]+`<br><br>`+imageArray[1]+`<br><br><hr style: color='red'><br>`+questionArray[2]+`<br><br>Your answer: `+playerAnswerArray[2]+`<br>Correct answer: `+correctAnswerArray[2]+`<br><br>`+imageArray[2]+`<br><br><hr style: color='red'><br>`+questionArray[3]+`<br><br>Your answer: `+playerAnswerArray[3]+`<br>Correct answer: `+correctAnswerArray[3]+`<br><br>`+imageArray[3]+`<br><br><hr style: color='red'><br>`+questionArray[4]+`<br><br>Your answer: `+playerAnswerArray[4]+`<br>Correct answer: `+correctAnswerArray[4]+`<br><br>`+imageArray[4]+`<br><br><hr style: color='red'><br>`+questionArray[5]+`<br><br>Your answer: `+playerAnswerArray[5]+`<br>Correct answer: `+correctAnswerArray[5]+`<br><br>`+imageArray[5]+`<br><br><hr style: color='red'><br>`+questionArray[6]+`<br><br>Your answer: `+playerAnswerArray[6]+`<br>Correct answer: `+correctAnswerArray[6]+`<br><br>`+imageArray[6]+`<br><br><hr style: color='red'><br>`+questionArray[7]+`<br><br>Your answer: `+playerAnswerArray[7]+`<br>Correct answer: `+correctAnswerArray[7]+`<br><br>`+imageArray[7]+`<br><br><hr style: color='red'><br>`+questionArray[8]+`<br><br>Your answer: `+playerAnswerArray[8]+`<br>Correct answer: `+correctAnswerArray[8]+`<br><br>`+imageArray[8]+`<br><br><hr style: color='red'><br>`+questionArray[9]+`<br><br>Your answer: `+playerAnswerArray[9]+`<br>Correct answer: `+correctAnswerArray[9]+`<br><br>`+imageArray[9]+`<br><br><br>`
  +tryAgain);
}

// --------------------------------------------------------
// function answerTheQuestion(){
//   $('.answer').click(function(){
//     questionsAndAnswers();
//   });
// }

// function questionsAndAnswers(){
//   currentQuizItem;

//   // currentQuestion;
//   // currentAnswer;
//   // currentImage;
//   $('#progress').text(questionCounter+1);
//   $('.answer').click(function(){
//     if(questionCounter<=10){
//       questionCounter++;
//       // currentQuestion;
//       // currentAnswer;
//       // currentImage;
//       $('#progress').text(questionCounter+1);
//       console.log(questionCounter);

//     }else{
//       gameover();
//     }
//   });
// }
function refreshGameplay(){
  $('#progress').text(questionCounter+1);
  $('#question').html(allQuestionsAndAnswers[questionCounter].question+
    `<br><br>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[0]+`</button>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[1]+`</button>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[2]+`</button>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[3]+`</button>`+
    `<br><br>`+
    allQuestionsAndAnswers[questionCounter].image);
    playGame();
}

function playGame(){
  $('#progress').text(questionCounter+1);
  $('button').on('click',function (){
    if ($(this).text() == allQuestionsAndAnswers[questionCounter].answer){
      correctAnswers++;
    }else{
      incorrectAnswers++;
    }
    questionCounter++;
    if(questionCounter >= 10){
      gameover();
    }else{
      refreshGameplay();
    }
  });
}

$("#startGame").click(function(){
  $('#preGameplay').hide();
  $('#gameplay').show();
  $('#timer').text(seconds);
  countdown();
  playGame();
});