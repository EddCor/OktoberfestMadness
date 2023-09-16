


isGameStarted = false



//esto es para ocultar de la imagen principal
const game = document.getElementById("game");
game.style.display = "none";

//esto es para ocultar de la imagen principal
const gameover = document.getElementById("gameover");
gameover.style.display = "none";

//esto es para cargar la imagen del personaje
const player = new Image();
player.src="./images/muchachona.png"


const table1 = new Image();
table1.src="./images/table.png"

const table2 = new Image();
table2.src="./images/table.png"

const table3 = new Image();
table3.src="./images/table.png"


//para crear el canvas y llamarlo del HTML /Y decirle que el juego es en 2 dimensiones 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Se utiliza para mover a la mushashona y para borrar su posicion previa
let position = canvas.height/2
// Limite para que la mushashona no se vaya muy arriba
const limitTop = canvas.height/2-150
// Limite para que la mushashona no se vaya muy abajo
const limitBottom = canvas.height/2+150


//esto es para dibujars los elementos del juego como la mesa o el jugador o cualquier otro elemento  y su pocision 
function startgame() {
    isGameStarted = true
    const start = document.getElementById("start");
        start.style.display = "none"; 
        game.style.display = "block";
        ctx.drawImage (player, 0, canvas.height / 2, 100, 150)
        ctx.drawImage (table1, canvas.width -800, canvas.height / 2, 700, 150)
        ctx.drawImage (table2, canvas.width -800, canvas.height / 2 -150, 700, 150)
        ctx.drawImage (table3, canvas.width -800, canvas.height / 2 +150, 700, 150)
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






 
/*
esto es una forma moderna:  () => {  igual a: function a(val) {} 
el punto es para llamar  una funcion o variable que esta dentro de un Objeto que ya esta definido (solo llama loq ue esta a la izq del punto)

*/
window.onload = () => {
    document.getElementById("startbutton").onclick = () => {
        startgame();
        
        
    }


    //esto es para agregar una funcion Listener (un listeneres una funcion que espera que sucedan eventos (tales como escuchar los comandos del teclado))
    document.addEventListener("keydown", (event) => {
        if (isGameStarted) {
            if (event.code == "ArrowUp" && position != limitTop) {
                moveUp();
            } else if (event.code == "ArrowDown" && position != limitBottom) {
                moveDown();
            }
        }
    });
}


