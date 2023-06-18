function Game()
{
    let psTotal = 0;
    let csTotal = 0;

    for (i = 0; i < 5; i++)
    {
        let playerSelection = prompt('Select rock, paper or scissors please.');

        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        function getComputerChoice()
        {
            randNumber = Math.floor(Math.random() * 3 + 1 );

            if (randNumber == 1)
            {
                console.log("rock");
                return "rock";
            } else if (randNumber == 2)
            {
                console.log("paper");
                return "paper";
            } else if (randNumber == 3)
            {
                console.log("scissors");
                return "scissors";
            }

        }

        function playRound(playerSelection, computerSelection)
        {
            let ps = playerSelection.toLowerCase();
            let cs = computerSelection.toLowerCase();

            if (ps === cs)
            {
                console.log('Draw!');
            }
            else if (ps === 'rock' && cs === 'paper'||
                ps === 'paper' && cs === 'scissors' ||
                ps === 'scissors' && cs === 'rock')
            {
                csTotal++;
                console.log('Player looses!');
            }
            else if (ps === 'rock' && cs === 'scissors' ||
                ps === 'paper' && cs === 'rock' ||
                ps === 'scissors' && cs === 'paper')
            {
                psTotal++;
                console.log('Player wins!');
            }
            else
            {
                return 'Something went wrong! Please refresh the website';
            }
        }
    }

    if (psTotal > csTotal)
    {
        return console.log('Player wins!\n' +
            'Player: ' + psTotal + '\n' +
            'PC: ' + csTotal);
    } else if (psTotal < csTotal )
    {
        return console.log('Computer wins!\n' +
            'PC: ' + csTotal + '\n' +
            'Player: ' + psTotal );
    } else if (psTotal === csTotal)
    {
        return console.log("it's a Draw");
    }
}

Game();

