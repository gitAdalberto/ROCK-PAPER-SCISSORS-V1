console.log("Hola mundo")

const arrayOptions = ["piedra","papel","tijeras"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.random().toPrecision(1);
    if (random <= 0.3) {
        return arrayOptions[0];
    }
    if (random > 0.3 && random <= 0.6) {
        return arrayOptions[1];
    }
    if (random > 0.6 && random <= 1) {
        return arrayOptions[2];
    }
}

function getHumanChoice(){
    let option = prompt("Elije entre piedra, papel o tijeras:");
    option = option.toLocaleLowerCase();
    
    if (option === "") {
        console.log("Debes de ingresar algo");
        return null;
    }

    if (option !== arrayOptions[0] && option !== arrayOptions[1] && option !== arrayOptions[2]) {
        console.log("Opcion no valida");
        return null;
    }

    console.log(`Tu opcion ${option} es una opcion valida`);
    
    return option;
}

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === null) {
        console.log("No puedes jugar.");
        return null;
    }

    if (humanChoice === computerChoice) {
        return "Parece que hubo un empate";
    }

    console.log(`el humano a elegido ${humanChoice} y la computadora ${computerChoice}`);

    if (humanChoice === "piedra" && computerChoice === "tijeras") {
        humanScore = humanScore + 1;
        return "Tu ganas! Piedra vence tijeras";
    }

    if (humanChoice === "tijeras" && computerChoice === "piedra") {
        computerScore = computerScore + 1;
        return "Tu pierdes! Piedra vence tijeras";
    }

    if (humanChoice === "tijeras" && computerChoice === "papel") {
        humanScore = humanScore + 1;
        return "Tu ganas! tijeras vencen papel";
    }

    if (humanChoice === "papel" && computerChoice === "tijeras") {
        computerScore = computerScore + 1;
        return "Tu pierdes! tijeras vencen papel";
    }

    if (humanChoice === "piedra" && computerChoice === "papel") {
        humanScore = humanScore + 1;
        return "Tu pierdes! papel vence piedra";
    }

    if (humanChoice === "papel" && computerChoice === "piedra") {
        computerScore = computerScore + 1;
        return "Tu ganas! papel vence piedra";
    }
}

function playGame() {
    
    for (let index = 0; index < 5; index++) {
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log({ humanScore, computerScore });
        
        if (humanScore === 3 || computerScore === 3) {
            break;
        }

    }

    if (humanScore > computerScore) {
        console.log("El humano gana");
        console.log({ humanScore, computerScore });
    } else {
        console.log("La computadora gana");
        console.log({ humanScore, computerScore });
    }

}

playGame();

