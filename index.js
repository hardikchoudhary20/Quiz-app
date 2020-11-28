var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!'+ "Welcome to Hardik's Game ");
let score = 0;
function play(question, answer){
 var userAnswer = readlineSync.question(question);


  if(userAnswer === answer){
    console.log("Right!, You got a point")
    score= score+1
    console.log("Current Score :",score);

    console.log("\n")
    console.log("-----------------------------")

  }
  else{
    console.log("wrong")

        console.log("Current Score :",score);
           console.log("\n")
         console.log("-----------------------------")
  }

}





var questions = [{
  question: "Where do I live?  ",
  answer: "mumbai"
},{
  question: "My favourite ipl team?  ",
  answer: "rcb"
},{
  question: "My nickname? ",
  answer: "manu"

},{
  question:"My university ",
  answer:"nmims"
  
}];
for(var i =0; i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer);
}


if(score>=3){
  console.log("Final score"+score+"   You know me well!, Lets catch up soon")
}
else{
  console.log("Game over"+"Final score"+score)
}