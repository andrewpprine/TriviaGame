//an array with 10 questions, each with 4 answer choices, the correct answer, and an image 
var allQuestionsAndAnswers = [
  { //1
    question: `What name did Hanks give the one friend he had on the island in <i>Castaway</i>?`,
    choices: [`Buddy`,`Wilson`,`Bubba`,`Tom`],
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
    question: `What was the name of the arcade game that grants Hanks' wish in <i>Big</i>?`,
    choices: [`Genie`,`Zoltar`,`Wizard`,`Wishy`],
    answer: `Zoltar`,
    image: `<img src='assets/images/answer4.jpg' width='300' height='300'>`
  },
  { //5
    question: `Which of these Hanks characters was NOT based a biographical figure?`,
    choices: [`an astronaut`,`an airline pilot`,`a train conductor`,`a ship captain`],
    answer: `a train conductor`,
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
    choices: [`Carl Handratty`,`John Tophopper`,`William Piccadilly`,`Jimmy Dinglehopper`],
    answer: `Carl Handratty`,
    image: `<img src='assets/images/answer9.jpg' width='300' height='300'>`
  },
  { //10
    question: `In <i>The Burbs</i>, what piece of evidence did Hanks find in his neighbor's house that led him to suspect them of murder? <br> Hint: he hid it in his shorts.`,
    choices: [`a photograph`,`a toupee`,`a bone`,`a half-eaten hot dog`],
    answer: `a toupee`,
    image: `<img src='assets/images/answer10.jpg' width='300' height='300'>`
  }
]

var playerAnswers = [];//players answers get added here for display on results page
var questionCounter = 0;//goes up with each question
var correctAnswers = 0;//
var incorrectAnswers = 0;
var seconds = 120;//for the two minute timer
var tryAgain = `<button id='tryagain' href='#' onClick="window.location.reload();return false";>Try Again!</button>`//displayed at end of results page; refreshes page

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
 
function gameover(){//displays the results page, which lists all questions, the player's answer, the correct answer, and the image from that question; reset button on bottom of page
  $('#gameplay').hide();
  $('#results').show();
  $(`#correctAnswerNumber`).text(correctAnswers);
  $('#resultsRecap').html(`<hr style: color='red'><br>`+allQuestionsAndAnswers[0].question+`<br><br>Your answer: `+playerAnswers[0]+`<br><br>Correct answer: `+allQuestionsAndAnswers[0].answer+`<br><br>`+allQuestionsAndAnswers[0].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[1].question+`<br><br>Your answer: `+playerAnswers[1]+`<br><br>Correct answer: `+allQuestionsAndAnswers[1].answer+`<br><br>`+allQuestionsAndAnswers[1].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[2].question+`<br><br>Your answer: `+playerAnswers[2]+`<br><br>Correct answer: `+allQuestionsAndAnswers[2].answer+`<br><br>`+allQuestionsAndAnswers[2].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[3].question+`<br><br>Your answer: `+playerAnswers[3]+`<br><br>Correct answer: `+allQuestionsAndAnswers[3].answer+`<br><br>`+allQuestionsAndAnswers[3].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[4].question+`<br><br>Your answer: `+playerAnswers[4]+`<br><br>Correct answer: `+allQuestionsAndAnswers[4].answer+`<br><br>`+allQuestionsAndAnswers[4].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[5].question+`<br><br>Your answer: `+playerAnswers[5]+`<br><br>Correct answer: `+allQuestionsAndAnswers[5].answer+`<br><br>`+allQuestionsAndAnswers[5].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[6].question+`<br><br>Your answer: `+playerAnswers[6]+`<br><br>Correct answer: `+allQuestionsAndAnswers[6].answer+`<br><br>`+allQuestionsAndAnswers[6].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[7].question+`<br><br>Your answer: `+playerAnswers[7]+`<br><br>Correct answer: `+allQuestionsAndAnswers[7].answer+`<br><br>`+allQuestionsAndAnswers[7].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[8].question+`<br><br>Your answer: `+playerAnswers[8]+`<br><br>Correct answer: `+allQuestionsAndAnswers[8].answer+`<br><br>`+allQuestionsAndAnswers[8].image+`<br><br><hr style: color ='red'><br>`+allQuestionsAndAnswers[9].question+`<br><br>Your answer: `+playerAnswers[9]+`<br><br>Correct answer: `+allQuestionsAndAnswers[9].answer+`<br><br>`+allQuestionsAndAnswers[9].image+`<br><br><hr style: color ='red'><br>`+tryAgain);
}

function getQuizStarted(){//displays question, answer choices, and image for quiz question
  $('#gameplayQA').html(allQuestionsAndAnswers[questionCounter].question+
  `<br><br>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[0]+`</button><br><br>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[1]+`</button><br><br>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[2]+`</button><br><br>
  <button>`+allQuestionsAndAnswers[questionCounter].choices[3]+`</button>`+
  `<br><br>`+
  allQuestionsAndAnswers[questionCounter].image);
}

function refreshGameplay(){//updates question number and question/answers/image
  $('#progress').text(questionCounter+1);
  $('#gameplayQA').html(allQuestionsAndAnswers[questionCounter].question+
    `<br><br>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[0]+`</button><br><br>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[1]+`</button><br><br>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[2]+`</button><br><br>
    <button>`+allQuestionsAndAnswers[questionCounter].choices[3]+`</button>`+
    `<br><br>`+
    allQuestionsAndAnswers[questionCounter].image);
    playGame();
}

function playGame(){//when player selects answer, it's recorded as correct or incorrect, that answer is saved to array of player answers, and calls function to move to next question -- unless all questions answered, which calls function to end game and display results page
  $('#progress').text(questionCounter+1);
  $('button').on('click',function (){
    if ($(this).text() == allQuestionsAndAnswers[questionCounter].answer){
      correctAnswers++;
    }else{
      incorrectAnswers++;
    }
    playerAnswers.push($(this).text());
    questionCounter++;
    if(questionCounter >= 10){
      gameover();
    }else{
      refreshGameplay();
    }
  });
}

$("#startGame").click(function(){//hides starting directions, displays gameplay area, starts the timer, and shows first question to begin gameplay
  $('#preGameplay').hide();
  $('#gameplay').show();
  $('#timer').text(seconds);
  countdown();
  getQuizStarted();
  playGame();
});