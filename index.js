let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_btn = document.getElementById("r");
const paper_btn = document.getElementById("p");
const scissors_btn = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats  ${convertToWord( computerChoice)}(comp). You win!`;
}

function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats  ${convertToWord( computerChoice)}(comp). You lost...!`;
   

}

function draw(userChoice,computerChoice) {
    

    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals  ${convertToWord( computerChoice)}(comp). It's a tie!`;



}

function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
         case "rr":
         case "pp":
         case "ss":
            draw(userChoice, computerChoice);
            break;

                  
     }



  
}


function main() {
  rock_btn.addEventListener('click', function() {
    game("r");
  })
  paper_btn.addEventListener('click', function() {
    game("p");
    
  })
  scissors_btn.addEventListener('click', function() {
    game("s");
    
  })
}

main();