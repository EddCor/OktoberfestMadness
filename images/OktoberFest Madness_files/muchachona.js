class Muchachona {
    constructor(gamearea, left, top, height, width) {
        this.gamearea = gamearea
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.element = document.createElement('img')
    
        this.element.src = 'images/muchachona.png'
        this.directionY = 0
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        
    
        this.gamearea.appendChild(this.element)
      }

      moveUp() {
        this.top += this.directionY;
        this.element.style.top = `${this.top}px`
        //console.log ("hello", this.top)
    }

    didCollide(beer) {
      const playerRect = this.element.getBoundingClientRect()
      const beerRect = beer.element.getBoundingClientRect()
  
      if (
        playerRect.left < beerRect.right &&
        playerRect.right > beerRect.left &&
        playerRect.top < beerRect.bottom &&
        playerRect.bottom > beerRect.top
      ) {
        return true
      } else {
        return false
      }
    }
}