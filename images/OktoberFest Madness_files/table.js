//esto es el diseno de donde la fabrica va a cojer el prototipo 

class Table {
    constructor(gamearea, left, top, height, width) {
        this.gamearea = gamearea
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.element = document.createElement('img')
    
        this.element.src = 'images/table.png';
    
        //this.element.style.position = 'absolute'

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
    
        this.gamearea.appendChild(this.element)
      }
}