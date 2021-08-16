var read = require('readline-sync');
 const chalk = require('chalk');
    
  const correctF = chalk.green.bold;
   const incorrectF = chalk.red.bold;
   const scoreF = chalk.black.bold.bgYellow;
   const questionF = chalk.magenta.bold;
      score = 0;
 var userName = " "
 userName = read.question("Please Enter your name: ");
  console.log(chalk.blue.bold(`Hello ${userName}! `));
  console.log( chalk.blue.bold('Welcome to "how well you know me ? " game'));

  function play(question, answer ){
    var userAnswer = read.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(correctF("You are Right !! "));
      score = score + 1 ;
      
    }
    else{
      console.log(incorrectF("You are Wrong !!"));
      
    }
  console.log(scoreF(`Your score is : ` + score ));
  }
  // calling the function 
  play("What is my HomeTown ", "bijnor");
  play("What is my age ? ", "23");
  play("What is my favorite  movie ? ", "avenger endgame");
  play("What is the Name of my College? ", "iet lucknow");
  play("Which course I have pursuing  currently", "mca");
  play("What is my favorite Programming language", "javascript");
play("What username I use most on my social handles?", "ayushkumar158");
play("Which mobile phone i have ?", "redmi note9 pro");
play("My favorite tourist spot", "shimla");
console.log(chalk.bold.blue('Thank you for playing the game ') + `${userName}`);

  console.log("Your Score is ", score);
