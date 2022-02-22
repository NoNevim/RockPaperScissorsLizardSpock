
// vytvorim promennou "playerWins" typu Int, do ktere vlozim 0
let playerWins = 0;
// vytvorim promennou "computerWins" typu Int, do ktere vlozim 0
let computerWins = 0;
// vytvorim promennou "thisRoundWins" typu String, do ktere vlozim ""
let tlasitko = document.querySelectorAll('button');
const selections = document.querySelector(".selections");
const result = document.querySelector('.result');
const score = document.querySelectorAll('.score');
const body = document.querySelector('body');
const content = document.createElement('div');
const resetButton = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons');
const scoreText = document.querySelector('.left')
resetButton.classList.add('button', 'reset');
resetButton.textContent = 'RESET GAME';
const margin = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const lizardButton = document.createElement('button');
const spockButton = document.createElement('button');
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';
lizardButton.textContent = 'Lizard';
spockButton.textContent = 'Spock';
margin.appendChild(rockButton);
margin.appendChild(paperButton);
margin.appendChild(scissorsButton);
margin.appendChild(lizardButton);
margin.appendChild(spockButton);
margin.classList.add('buttons');

//resetButton.classList.add()


//const kontejner = document.querySelector('.container');

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

function game(playerSelection) {
    
    let sayResult = "";
    let computer = computerPlay();
    selections.textContent=`You chose ${playerSelection} and computer chose ${computer}`;
    sayResult = playRound(playerSelection, computer);
        
    result.textContent = sayResult;
    score[0].textContent = playerWins;
    score[2].textContent = computerWins;

    
       
    if ( playerWins === 5 ) {
        body.classList.add('win');
        content.textContent = "You are winneeeeer yayayayayyayaaaaay!!!!!";
        content.classList.add('wintext')
        body.appendChild(content);
        body.appendChild(resetButton);
        
        // tlasitko[0].removeEventListener('click', () => game('rock'));
        //setTimeout(reset(),5000);
        
        body.removeChild(buttonsContainer);
        body.insertBefore(margin, selections);
        scoreText.textContent = 'Final score';
        

    } else if ( computerWins === 5 ) {
        body.classList.add('lose');

        
        content.textContent = "GTFO you loser";
        content.classList.add('losetext')
        body.appendChild(content);
        body.appendChild(resetButton);

        body.removeChild(buttonsContainer);
        body.insertBefore(margin, selections);
        scoreText.textContent = 'Final score';

    
        // tlasitko[0].removeEventListener('click', () => game('rock'));
        //setTimeout(reset(),5000);
    }       

    

}

function playerWonRound(playerSelection, computerPlay) {
        playerWins += 1;
        return `You win this round, ${playerSelection} defeats ${computerPlay}.`;
}

function computerWonRound(playerSelection, computerPlay) {
        computerWins += 1;
    return `You lost this round, ${playerSelection} is defeated by ${computerPlay}.`;
}



 

tlasitko[0].addEventListener('click', () => game('rock'));

tlasitko[1].addEventListener('click', () => game('paper'));

tlasitko[2].addEventListener('click', () => game('scissors'));

tlasitko[3].addEventListener('click', () => game('lizard'));

tlasitko[4].addEventListener('click', () => game('spock'));

resetButton.addEventListener('click', reset);

function reset() {
    body.removeChild(content);
    body.classList.remove('lose');
    body.classList.remove('win');
    body.removeChild(resetButton);
    playerWins = 0;
    computerWins = 0;
    score[0].textContent = playerWins;
    score[2].textContent = computerWins;

    body.insertBefore(buttonsContainer, selections);
    body.removeChild(margin);
    scoreText.textContent = 'Current score';

    selections.textContent = 'Click on one of the buttons above';
    result.textContent = 'LET THE BATTLE BEGIN!!!!!!';
}

