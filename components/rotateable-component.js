class Rotateable {
	constructor(api) {
    this.api = api;
    
		this.isMouseDown = false;
    this.angle = 0;
    this.elevation = 0;

    this.api.element.addEventListener('mousedown', this.onMousedown.bind(this));
    this.api.element.addEventListener('mousemove', this.onMousemove.bind(this));
    this.api.element.addEventListener('mouseup', this.onMouseup.bind(this));
	}
	
	update() {
    this.rotate();
  }
	
  rotate() {
    this.api.draw(`rotateX(${this.elevation}rad) rotateY(${-this.angle}rad)`);
  }
	
  onMousedown() {
    this.isMouseDown = true;
  }
  
  onMousemove(e) {
    if (!this.isMouseDown) {
      return;
    }
    
		const radius = this.api.getRadius();

    this.angle += (Math.PI / radius) * e.movementX;
    this.elevation += (Math.PI / radius) * e.movementY;
    this.rotate();
  }

  onMouseup() {  
    this.isMouseDown = false;
  }
}