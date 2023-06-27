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
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;




// Array to hold the loaded image frames
var framesKnight1 = [];
var framesKnight2 = [];
var framesKnight3 = [];
var animationInterval;


// Array specifying the animation sequence
// var sequence = ["ATTACK", "DIE", "HURT", "IDLE", "JUMP", "RUN", "WALK"];
var sequence = ["IDLE"];

// Duration in milliseconds for each frame
var frameDuration = 80; // Adjust this value to control the animation speed

// Load the images and store them in the frames array
function loadImages(callback) {
    var imageCount = 0;
    framesKnight1 = [];
    framesKnight2 = [];
    framesKnight3 = [];

    // Array of folder names
    var knightsArray = ["1_KNIGHT", "2_KNIGHT", "3_KNIGHT"];

    knightsArray.forEach(function (knightFolder, index) {
        sequence.forEach(function (action) {

            for (var i = 0; i <= 9; i++) {
                var image = new Image();
                var knightNumber = ("0" + (index + 1)).slice(-2);
                image.src =
                    "assets/sprites/" +
                    knightFolder +
                    "/Knight_" +
                    knightNumber +
                    "__" +
                    action +
                    "_" +
                    ("000" + i).slice(-3) +
                    ".png";


                if (knightFolder === "1_KNIGHT") {
                    framesKnight1.push(image);
                } else if (knightFolder === "2_KNIGHT") {
                    framesKnight2.push(image);
                } else if (knightFolder === "3_KNIGHT") {
                    framesKnight3.push(image);
                }

                image.onload = () => {
                    imageCount++;
                    if (imageCount === framesKnight1.length) {
                        callback();
                    }
                };
            }
        });
    });
}

// Start the animation
function startAnimation(knight) {
    var currentFrame1 = 0;
    var currentFrame2 = 0;
    var currentFrame3 = 0;
    var k1xPos = -100;
    var k1yPos = 0;
    var k2xPos = -60;
    var k2yPos = 150;
    var k3xPos = -100;
    var k3yPos = 300;

    console.log('Knight: ' + knight);



    animationInterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Caballero 1

            if (sequence.includes("RUN") && sequence.includes("ATTACK") && knight === '2') {

                let entro1 = 'Entro igual al K1';
                console.log(entro1);
                ctx.drawImage(framesKnight1[currentFrame1], k2xPos, k2yPos, 300, 200);
                currentFrame1++;
                if (k2xPos <= 50) {
                    k2xPos += 10;
                } else {
                    k2xPos;
                }

                    console.log(sequence  + "  S")
                    if (currentFrame1 === framesKnight1.length) {
                        currentFrame1 = 0;
                        clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
                        setTimeout(() => {
                        sequence = ['IDLE'];
                            let idleInterval = setInterval(() => {
                                ctx.drawImage(framesKnight2[0], -100, 0, 300, 200);
                            }, frameDuration);
                            setTimeout(() => {
                                clearInterval(idleInterval); // Detener la animación de "IDLE" después de 5 segundos
                                loadImages(() => {
                                    sequence = ['IDLE'];
                                    startAnimation(); // Reiniciar la animación principal
                                });
                            }, 100);
                        }, frameDuration);
                    }


            } else {
                console.log(sequence);
                ctx.drawImage(framesKnight1[currentFrame1], -60, 150, 300, 200);
                currentFrame1++;
                if (currentFrame1 === framesKnight1.length) {
                    console.log("entro aca else de S");
                    currentFrame1 = 0;
                }

            }



        // Caballero 2
        if (sequence.includes("RUN") && sequence.includes("ATTACK") && knight === '1')
        {
            let entro2 = 'Entro igual al K2';
            console.log(entro2);
            ctx.drawImage(framesKnight2[currentFrame2], k1xPos, k1yPos, 300, 200);
            currentFrame2++;
            if (k1xPos <= 50) {
                k1xPos += 10;
                k1yPos += 10;
            } else {
                k1xPos;
                k1yPos;
            }

            console.log(sequence  + "  A")
            if (currentFrame2 === framesKnight2.length) {
                currentFrame2 = 0;
                console.log("ACAAAAAAAAA");
                clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
                setTimeout(() => {
                    sequence = ['IDLE']; // Limpiar la secuencia actual
                    console.log("x: " + k1xPos);
                    console.log("y: " + k1yPos);
                    let idleInterval = setInterval(() => {
                        ctx.drawImage(framesKnight2[0], -100, 0, 300, 200);
                }, frameDuration);
                    setTimeout(() => {
                        clearInterval(idleInterval); // Detener la animación de "IDLE" después de 5 segundos
                        loadImages(() => {
                            console.log("ACAAAAAAAAA");
                            sequence = ['IDLE'];
                            console.log(sequence);
                            startAnimation(); // Reiniciar la animación principal
                        });
                    }, 100);
                }, frameDuration);
            }
        }
        else
        {
            ctx.drawImage(framesKnight2[currentFrame2], -100, 0, 300, 200);
            currentFrame2++;
            if (currentFrame2 === framesKnight2.length) {
                currentFrame2 = 0;
                console.log("entro aca else de A");
            }
        }


        // Caballero 3

        if (sequence.includes("RUN") && sequence.includes("ATTACK") && knight === '3') {

            let entro3 = 'Entro igual al K3';
            console.log(entro3);

            ctx.drawImage(framesKnight3[currentFrame3], k3xPos, k3yPos, 300, 200);
            currentFrame3++;
            if (k3xPos <= 50) {
                k3xPos += 10;
                k3yPos -= 10;
            } else {
                k3xPos;
                k3yPos;
            }

            console.log(sequence + "  D")
            if (currentFrame3 === framesKnight3.length) {
                currentFrame3 = 0;
                clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
                setTimeout(() => {
                    sequence = ['IDLE']; // Limpiar la secuencia actual
                    let idleInterval = setInterval(() => {
                        ctx.drawImage(framesKnight2[0], -100, 0, 300, 200);
                    }, frameDuration);
                    setTimeout(() => {
                        clearInterval(idleInterval); // Detener la animación de "IDLE" después de 5 segundos
                        loadImages(() => {
                            sequence = ['IDLE'];
                            startAnimation(); // Reiniciar la animación principal
                        });
                    }, 100);
                }, frameDuration);
            }

        } else {
            ctx.drawImage(framesKnight3[currentFrame3], -100, 300, 300, 200);
            currentFrame3++;
            if (currentFrame3 === framesKnight3.length) {
                currentFrame3 = 0;
                console.log("entro aca else de D");
            }
        }

    }, frameDuration);
}



btn.addEventListener("click", () => {

        div.classList.add("hidden");
        btn.setAttribute('style', 'background-image: url(https://media.freestocktextures.com/cache/21/08/21089fc1728d02b54392f4b4f4b117f7.jpg)');
        divElement.innerHTML = btn.innerHTML; // Copia el contenido del botón
        divElement.className = btn.className; // Copia las clases del botón
        divElement.setAttribute('id', btn.getAttribute('id'));
        btn.replaceWith(divElement);
        divElement.classList.remove("cool-button");
        divElement.textContent = '';
        divElement.classList.add("board");
        divElement.appendChild(canvas);
        canvas.classList.add('canvas');

    // loadImages( () => startAnimation());
    loadImages(() => {
        sequence = ["IDLE"]; // Establecer la secuencia en "IDLE" por defecto
        startAnimation();
    });
});

document.addEventListener("keydown", function(event) {

    if (event.key === "a") {
        sequence = ["RUN", "ATTACK"];
        clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
        loadImages(() => {
            startAnimation('1');
        });
    } else if (event.key === "s") {
        sequence = ["RUN", "ATTACK"];
        clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
        loadImages(() => {
            startAnimation('2');
        });
    } else if (event.key === "d") {
        sequence = ["RUN", "ATTACK"];
        clearInterval(animationInterval); // Limpiar cualquier intervalo de animación existente
        loadImages(() => {
            startAnimation('3');
        });
    }
});




