// Task 1,2,3
const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        return "Invalid Choice";
    }
};

// Task 5
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Task 7-10
function determineWinner(userChoice, computerChoice) {

    if (userChoice === "bomb") {
        return "Secret Code Activated! You Win!";
    }

    if (userChoice === computerChoice) {
        return "It's a Tie!";
    }

    if (userChoice === "rock") {

        if (computerChoice === "paper") {
            return "Computer Wins!";
        } else {
            return "You Win!";
        }

    }

    if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            return "Computer Wins!";
        } else {
            return "You Win!";
        }

    }

    if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            return "Computer Wins!";
        } else {
            return "You Win!";
        }

    }
}

// Task 12-13
function playGame() {

    let userChoice =
        getUserChoice(
            document.getElementById("userChoice").value
        );

    let computerChoice = getComputerChoice();

    let winner =
        determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerHTML =
        "<strong>Your Choice:</strong> " + userChoice +
        "<br><strong>Computer Choice:</strong> " + computerChoice +
        "<br><strong>Result:</strong> " + winner;
}