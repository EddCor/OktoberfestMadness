// esto es la fabrica 
// el constructor en esta clase es para iniciar o aparecer los items del juego 

class Game {
   constructor () {
      this.startscreen = document.getElementById('start')
      this.gamescreen = document.getElementById('game')
      this.gameoverscreen = document.getElementById('gameover')
      this.gamearea = document.getElementById('gamearea')
      this.height =  700
      this.width = 900
      this.muchachona = new Muchachona(gamearea, gamearea.style.clientWidth , (gamearea.style.clientHeight / 2), 150, 100);   
   
      this.score = 0
      
      this.gameOver = false

        this.gamearea = gamearea
        this.table1 = new Table(gamearea, gamearea.style.clientWidth  , gamearea.style.clientHeight / 2      , 150, 700);
        this.table2 = new Table(gamearea, gamearea.style.clientWidth , (gamearea.style.clientHeight / 2) - 150, 150, 700);
        this.table3 = new Table(gamearea, gamearea.style.clientWidth , (gamearea.style.clientHeight / 2) + 150, 150, 700);
        
   } 

   start() {
      this.startscreen.style.display = 'none'
      this.gameoverscreen.style.display = 'none'
      this.gamescreen.style.display = 'block'
  
      this.gamearea.style.height = `${this.height}px`
      this.gamearea.style.width = `${this.width}px`
  
      //this.gameLoop()
    }

   moveUp() {
      this.muchachona.moveUp();
   }
}