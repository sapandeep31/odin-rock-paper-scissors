const ch = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * ch.length);
    return ch[computerChoice];
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("\nPress 1 for Rock \nPress 2 for Paper \nPress 3 for Scissors.")) - 1;
    while (humanChoice < 0 || humanChoice >= ch.length || isNaN(humanChoice)) {
        alert("Invalid choice. Please enter 1, 2, or 3.");
        humanChoice = parseInt(prompt("\nPress 1 for Rock \nPress 2 for Paper \nPress 3 for Scissors.")) - 1;
    }
    return ch[humanChoice];
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function game() {
    let playAgain = true;
    while (playAgain) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        alert(playRound(computerChoice, humanChoice));
        alert(`Score: Human ${humanScore} - ${computerScore} Computer`);
        playAgain = confirm("Do you want to play again?");
    }
    alert(`Final Score: Human ${humanScore} - ${computerScore} Computer`);
    if (humanScore > computerScore) {
        alert("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        alert("Sorry! The computer is the overall winner!");
    } else {
        alert("It's an overall tie!");
    }
}

game();