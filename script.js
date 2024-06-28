const ch = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let flag = 1;

function getComputerChoice1() {
    let computerChoice = Math.floor(Math.random() * ch.length);
    return ch[computerChoice];
}

function getComputerChoice2(humanChoiceIndex) {
    let computerChoice;
    if (humanChoiceIndex == 0) {
        computerChoice = 1; // paper beats rock
    } else if (humanChoiceIndex == 1) {
        computerChoice = 2; // scissors beats paper
    } else {
        computerChoice = 0; // rock beats scissors
    }
    return ch[computerChoice];
}

function playRound(humanChoice) {
    const humanChoiceIndex = ch.indexOf(humanChoice);
    let computerChoice;
    if (flag == 0) {
        computerChoice = getComputerChoice2(humanChoiceIndex);
    } else {
        computerChoice = getComputerChoice1();
    }
    
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
    if(flag==0){
        flag=1;
    }
    else{
        flag=0;
    }
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

document.getElementById('reset').addEventListener('click', resetGame);

resetGame(); // Initialize game state
