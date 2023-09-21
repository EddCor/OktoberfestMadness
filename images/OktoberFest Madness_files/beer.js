class Beer {
    constructor(gamearea, left, top, height, width, score) {
        this.gamearea = gamearea
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.score = score
        

        this.element = document.createElement('img')
    
        this.element.src = 'images/cerveza.png'
        this.element.style.position = 'absolute'    
        
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
    
        this.gamearea.appendChild(this.element)
      }


      move() {
        this.updatePosition()
        //console.log (this.left, "hi")
        this.element.style.left = `${this.left}px`
      }
    
      updatePosition() {
       


        if (this.score > 200) {
          this.left -= this.score * 0.01}

         else{
          this.left -= 5

         }
        
      }


}