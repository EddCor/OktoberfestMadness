
// Se utiliza para mover a la mushashona y para borrar su posicion previa
//let position = canvas.height/2|
// Limite para que la mushashona no se vaya muy arriba
//const limitTop = canvas.height/2-150
// Limite para que la mushashona no se vaya muy abajo
//const limitBottom = canvas.height/2+150


/*
//esto es para dibujars los elementos del juego como la mesa o el jugador o cualquier otro elemento  y su pocision 
function startgame() {
    game = new Game(gamearea);

    isGameStarted = true
    const start = document.getElementById("start");
        start.style.display = "none"; 
        gameDiv.style.display = "block";

        //const beerPosition = { x: canvas.width, y: Math.random() * canvas.height };
        //ctx.drawImage (player, 0, canvas.height / 2, 100, 150)
        //ctx.drawImage (table1, canvas.width - 800, canvas.height / 2, 700, 150)
        //ctx.drawImage (table2, canvas.width -800, canvas.height / 2 -150, 700, 150) 
        //ctx.drawImage (table3, canvas.width -800, canvas.height / 2 +150, 700, 150)
        //ctx.drawImage(beer, beerPosition.x, beerPosition.y, 30, 50);
}

// esto es para crear las funciones de movimiento de la muchachona 
function moveUp() {
    ctx.clearRect(0, position, 100, 150)
    position = position - 150
    ctx.drawImage (player, 0, position, 100, 150)
}

function moveDown() {
    ctx.clearRect(0, position, 100, 150)
    position = position + 150
    ctx.drawImage (player, 0, position, 100, 150)
}


//esto es para el moviemiento de la cerveza 
function moveBeer() {

    ctx.clearRect(beerPosition.x, beerPosition.y, 30, 50);
    beerPosition.x -= 5;
    ctx.drawImage(beer, beerPosition.x, beerPosition.y, 30, 50);
    if (beerPosition.x < -30) {
        beerPosition.x = canvas.width;
        beerPosition.y = Math.random() * canvas.height;
    }
    requestAnimationFrame(moveBeer);
}
*/

let isGameStarted = false;

 
/*
esto es una forma moderna:  () => {  igual a: function a(val) {} 
el punto es para llamar  una funcion o variable que esta dentro de un Objeto que ya esta definido (solo llama loq ue esta a la izq del punto)

*/
window.onload = () => {
    let game = null;
    document.getElementById("startbutton").onclick = () => {
        game = new Game();
        game.start();
        isGameStarted = true;
        //moveBeer();
    }
    //esto es para agregar una funcion Listener (un listeneres una funcion que espera que sucedan eventos (tales como escuchar los comandos del teclado))
    document.addEventListener("keydown", (event) => {
        if (isGameStarted) {
            event.preventDefault()
            if (event.code == "ArrowUp" /*&& position != limitTop*/) {
                game.moveUp();
            } else if (event.code == "ArrowDown" /*&& position != limitBottom*/) {
               
               // moveDown();
            }
        }
    });
}


