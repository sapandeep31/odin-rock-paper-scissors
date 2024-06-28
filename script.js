const ch = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * ch.length);
    return ch[computerChoice];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
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

function updateScore() {
    document.getElementById('score').textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
}

function updateResult(result) {
    document.getElementById('result-text').textContent = result;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    updateResult("Make your choice!");
}

document.getElementById('rock').addEventListener('click', function() {
    const result = playRound('rock');
    updateResult(result);
    updateScore();
});

document.getElementById('paper').addEventListener('click', function() {
    const result = playRound('paper');
    updateResult(result);
    updateScore();
});

document.getElementById('scissors').addEventListener('click', function() {
    const result = playRound('scissors');
    updateResult(result);
    updateScore();
});

document.getElementById('reset').addEventListener('click',resetGame);

resetGame(); 

