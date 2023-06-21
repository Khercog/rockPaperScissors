function Game()
{
    let psTotal = 0;
    let csTotal = 0;
    let ready = null;

    if (ready != null) {

        let playerSelection = prompt('Select rock, paper or scissors please.');

        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        function getComputerChoice() {
            randNumber = Math.floor(Math.random() * 3 + 1);

            if (randNumber == 1) {
                console.log("rock");
                return "rock";
            } else if (randNumber == 2) {
                console.log("paper");
                return "paper";
            } else if (randNumber == 3) {
                console.log("scissors");
                return "scissors";
            }
        }


        function playRound(playerSelection, computerSelection) {
            let ps = playerSelection.toLowerCase();
            let cs = computerSelection.toLowerCase();

            if (ps === cs) {
                alert('Draw!');
            } else if (ps === 'rock' && cs === 'paper' ||
                ps === 'paper' && cs === 'scissors' ||
                ps === 'scissors' && cs === 'rock') {
                csTotal++;
                alert('Player looses!');
            } else if (ps === 'rock' && cs === 'scissors' ||
                ps === 'paper' && cs === 'rock' ||
                ps === 'scissors' && cs === 'paper') {
                psTotal++;
                alert('Player wins!');
            } else {
                return 'Something went wrong! Please refresh the website';
            }
        }


        if (psTotal > csTotal) {
            return alert('Player wins!\n' +
                'Player: ' + psTotal + '\n' +
                'PC: ' + csTotal);
        } else if (psTotal < csTotal) {
            return alert('Computer wins!\n' +
                'PC: ' + csTotal + '\n' +
                'Player: ' + psTotal);
        } else if (psTotal === csTotal) {
            return alert("it's a Draw");
        }

    }
}

const btn = document.querySelector(".cool-button");
const div = document.querySelector("header.container");
const divElement = document.createElement('div');


btn.addEventListener("click", () => {
    // Agregar clase para activar la animación
    btn.classList.add('click-animation');

    // Quitar la clase después de un tiempo para reiniciar la animación
    setTimeout(function() {
        btn.classList.remove('click-animation');
    }, 500);
    setTimeout(function() {
        div.classList.add("hidden");
        btn.setAttribute('style', 'background-image: url(https://media.freestocktextures.com/cache/21/08/21089fc1728d02b54392f4b4f4b117f7.jpg)');
        divElement.innerHTML = btn.innerHTML; // Copia el contenido del botón
        divElement.className = btn.className; // Copia las clases del botón
        divElement.setAttribute('id', btn.getAttribute('id'));
        btn.replaceWith(divElement);
        divElement.classList.remove("cool-button");
        divElement.textContent = '';
        divElement.classList.add("board");
    }, 500);



});




