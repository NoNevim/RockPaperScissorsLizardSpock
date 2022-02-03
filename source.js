

// vytvorim promennou "playerWins" typu Int, do ktere vlozim 0
let playerWins = 0;
// vytvorim promennou "computerWins" typu Int, do ktere vlozim 0
let computerWins = 0;
// vytvorim promennou "thisRoundWins" typu String, do ktere vlozim ""

// vytvorim funkci "computerPlay" (bez parametru), ktera nahodne generuje volbu pocitace a vraci jeden ze stringu (rock, paper, scissors, lizard, spock)
function computerPlay() {
    let randomNumber = Math.floor((Math.random()*5)+1);
    switch (randomNumber) {
        case 1: 
            return "rock";        
        case 2:
            return "paper";
        case 3:
            return "scissors";
        case 4:
            return "lizard";
        case 5:
            return "spock";
        default:
            return "something went wrong in function computerPlay";
    }
}
// vytvorim funkci "playRound", ktera bere dva parametry - hracovu volbu (playerSelection) a volbu pocitace (computerPlay) a vrati 
        //string s informaci, jestli hrac vyhral nebo prohral a proc (neco beats neco) + uvnitr funkce inkrementuje v zavislosti na
        //vysledku bud promennou "playerWins" nebo "ComputerWins"
function playRound (playerSelection, computerPlay) {

        if (playerSelection === "rock" && (computerPlay === "scissors" || computerPlay === "lizard")) return playerWonRound(playerSelection, computerPlay);
        if (playerSelection === "rock" && (computerPlay === "paper" || computerPlay === "spock")) return computerWonRound(playerSelection, computerPlay);

        if (playerSelection === "scissors" && (computerPlay === "paper" || computerPlay === "lizard")) return playerWonRound(playerSelection, computerPlay);
        if (playerSelection === "scissors" && (computerPlay === "rock" || computerPlay === "spock")) return computerWonRound(playerSelection, computerPlay);

        if (playerSelection === "spock" && (computerPlay === "rock" || computerPlay === "scissors")) return playerWonRound(playerSelection, computerPlay);
        if (playerSelection === "spock" && (computerPlay === "paper" || computerPlay === "lizard")) return computerWonRound(playerSelection, computerPlay);

        if (playerSelection === "lizard" && (computerPlay === "paper" || computerPlay === "spock")) return playerWonRound(playerSelection, computerPlay);
        if (playerSelection === "lizard" && (computerPlay === "rock" || computerPlay === "scissors")) return computerWonRound(playerSelection, computerPlay);

        if (playerSelection === "paper" && (computerPlay === "rock" || computerPlay === "spock")) return playerWonRound(playerSelection, computerPlay);
        if (playerSelection === "paper" && (computerPlay === "scissors" || computerPlay === "lizard")) return computerWonRound(playerSelection, computerPlay);


        return `This round is a draw. The score is still ${playerWins}:${computerWins}`;
    
}

// vytvorim funkci "game", ktera 5x zopakuje:
                // zeptam se na to, co chci hrat (rock, paper, scissors, lizard, spock) - pres prompt
                // osetrim vstup od ostatnich zadanych moznosti (nesmi se vlozit nic krome 5 zakladnich stringu)
                // prevedu vstup na lowercase (tim odstranim mozne problemy s case sensitive)
                // vstup od hrace ulozim do promenne "playerSelection"
                // spustim funkci "playRound" - se vstupy "playerSelection" a "computerSelection" a vystup vypisu do konzole (alarmu) spolecne
                    // s prubeznym skore hrac vs pocitac   
                //  po dobehnuti 5 her zobrazim status, kdo vyhral celkove
function game() {
    let sayResult = "";
    let playerSelection = "";
    
    //Loop:
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt(`Round ${i}/5. Choose: Rock, Paper, Scissors, Lizard, Spock`);
        if (playerSelection === null) return 666;
            
        /* if (typeof(playerSelection) !== "string") {
            alert("You have chosen wrong value - you have to write one of theese: Rock, Paper, Scissors, Lizard, Spock");
        return;
        } */
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors") && (playerSelection !== "lizard") && (playerSelection !== "spock")) {
            alert("You have chosen wrong value - you have to write one of theese: Rock, Paper, Scissors, Lizard, Spock");
            i--;
            continue;
        }
        sayResult = playRound(playerSelection, computerPlay());
        alert(sayResult);
    }

    if (playerWins > computerWins) {
        alert(`Yayy. You are overall winner! Final score is ${playerWins}:${computerWins}`);
    } else if (computerWins > playerWins) {
        alert(`What a shame. Computer had more luck. Final score is ${playerWins}:${computerWins}`);
    } else {
        alert(`Ok, nobody wins. Shake hands with each other. It is draw: ${playerWins}:${computerWins}`)
    }    
}

function playerWonRound(playerSelection, computerPlay) {
        playerWins += 1;
        return `You win this round, ${playerSelection} defeats ${computerPlay}. Current score is ${playerWins}:${computerWins}`;
}

function computerWonRound(playerSelection, computerPlay) {
        computerWins += 1;
    return `You lost this round, ${playerSelection} is defeated by ${computerPlay}. Current score is ${playerWins}:${computerWins}`;
}


let keepGoing = true;
while(keepGoing)
    if (game() === 666 ) {
        let playAgain =confirm("You have canceled the game, wanna play again?");
        (playAgain) ? keepGoing = true : keepGoing = false;
    } else {
        let playAgain =confirm("Wanna play again?");
        (playAgain) ? keepGoing = true : keepGoing = false;
    }   



//console.log(playRound(computerPlay(),computerPlay()));

