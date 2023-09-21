// esto es la fabrica 
// el constructor en esta clase es para iniciar o aparecer los items del juego 

class Game {
   constructor() {
      this.startscreen = document.getElementById('start')
      this.gamescreen = document.getElementById('game')
      this.gameoverscreen = document.getElementById('gameover')
      this.gamearea = document.getElementById('gamearea')
      this.scoretext = document.getElementById('score-count')
      this.height = 700
      this.width = 900
      this.beerdel = 400
      this.muchachona = new Muchachona(gamearea, 100, 275, 150, 100);

      this.beers = []
      this.beer
      this.score = 0

      this.gameOver = false
      this.gamearea.style.position = "relative"
      this.beerlevel = [325, 175, 475]
      this.table1 = new Table(gamearea, gamearea.style.clientWidth, gamearea.style.clientHeight / 2, 150, 700);
      this.table2 = new Table(gamearea, gamearea.style.clientWidth, (gamearea.style.clientHeight / 2) - 150, 150, 700);
      this.table3 = new Table(gamearea, gamearea.style.clientWidth, (gamearea.style.clientHeight / 2) + 150, 150, 700);
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
   gameLoop() {
      if (this.score === 200) {
         this.beerdel = 200
      }
      if (this.score === 400) {
         this.beerdel = 100
      }
      if (this.score === 600) {
         this.beerdel = 50
      }
      if (this.score === 800) {
         this.beerdel = 10
      }
      if (this.intervalId % this.beerdel === 0) {
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

//gameover
      if (this.gameOver) {
         this.gamescreen.style.display = 'none'
         this.gamearea.style.display = 'none'
         this.gameoverscreen.style.display = 'block'
        cancelAnimationFrame(this.intervalId)
        document.getElementById ("score-countGaOv").innerHTML = this.score
      }

      else {
         this.intervalId = requestAnimationFrame(() => this.gameLoop())
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
            this.scoretext.innerHTML = this.score
            console.log(this.score)

            this.drawNewBeer = true
         } else if (beer.left < 0) {
            this.gameOver = true
         } else {
            nextBeers.push(beer)
         }
      })
this.beers = nextBeers
   }
}


