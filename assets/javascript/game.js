var seconds = 120;

function timer(){
   seconds--;
   $("#timer").text(seconds);
   if (seconds === 0){
     alert("Time's Up!")
   }
 }
$("button").click(function(){
   alert('GO!');
   $('#timer').text(seconds);

});
