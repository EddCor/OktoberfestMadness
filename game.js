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
      this.muchachona = new Muchachona(gamearea, 100 , 275, 150, 100);   
      
      this.beers = []
      this.beer
      this.score = 0
      
      this.gameOver = false
      this.gamearea.style.position = "relative"
        this.beerlevel = [325, 175, 475]
        this.table1 = new Table(gamearea, gamearea.style.clientWidth  , gamearea.style.clientHeight / 2      , 150, 700);
        this.table2 = new Table(gamearea, gamearea.style.clientWidth , (gamearea.style.clientHeight / 2) - 150, 150, 700);
        this.table3 = new Table(gamearea, gamearea.style.clientWidth , (gamearea.style.clientHeight / 2) + 150, 150, 700);
        this.intervalId = null

         this.drawNewBeer = true

         this.beerHeights = [0, -150, 150]
   } 

   start() {
      this.startscreen.style.display = 'none'
      this.gameoverscreen.style.display = 'none'
      this.gamescreen.style.display = 'block'
  
      this.gamearea.style.height = `${this.height}px`
      this.gamearea.style.width = `${this.width}px`
  
      this.gameLoop()
    }
    gameLoop(){
      if (this.intervalId %400 === 0) {
         this.beers.push(
            new Beer(
              this.gamearea,
              850,
              this.beerlevel[Math.floor(Math.random() * this.beerlevel.length)],
              50,
              50,
              this.score
            )
          )
          
      }


      if (this.gameOver) {
         cancelAnimationFrame(this.intervalId)
         
      }
      else {
         this.intervalId = requestAnimationFrame(()=> this.gameLoop())
         this.moveUp()
         this.update()

      }
    }
   moveUp() {
      this.muchachona.moveUp();
      //console.log ("test")
   }

  
   update() {
     
      console.log(this.beer)
      const nextBeers = []
      this.beers.forEach(beer => {
        beer.move()
        if (this.muchachona.didCollide(beer)) {
           beer.element.remove()
           this.score += 50
           console.log(this.score)
           this.drawNewBeer = true
         } else if (beer.left < this.table1.left) {
           beer.element.remove()
         } else {
           nextBeers.push(beer)
         }
      })
     
    }
  }

  
