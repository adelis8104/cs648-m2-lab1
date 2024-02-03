function validateChoice(choice){
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = window.prompt("Invalid choice. Please enter rock, paper, or scissors:");
        return; // Exit the function if the input is invalid
    }
    return choice;
}

function convertComputerChoice(choice){
    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

function winner(userChoice, computerChoice){
    var results = "";
    if (userChoice === computerChoice) {
        results = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        results = "You win!";
    } else {
        results = "Computer wins!";
    }
    return results;
}


function main(){
    var userChoice = window.prompt("Do you choose rock, paper, or scissors: ").toLowerCase();
    userChoice = validateChoice(userChoice);

    var computerChoice = Math.floor(Math.random() * 3); // Random number between 0 and 2
    computerChoice = convertComputerChoice(computerChoice);

    window.alert("You entered " + userChoice + " and the computer entered " + computerChoice + ".\n" + winner(userChoice, computerChoice));
}

main();
