class Cube extends Entity {
  constructor(api) {
    const cubeEl = document.createElement('div');
    cubeEl.classList.add('cube');
    
    super(cubeEl);
    
    this.api = api;
    
    this.radius = 0;
    this.styleManager = new StyleManager('cube', {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'transform-origin': '50% 50%',
      'perspective-origin': '50% 50%',
    });
 
    for (let i = 0; i < 6; i++) {
      this.addChildEntity(new Face(i + 1));
    }
    
    this.draw();
  }
  
  draw(transformStyle = '') {
    this.radius = this.api.getRadius();

    this.children.forEach(e => {
      e.draw(transformStyle, this.radius);
    });
  }
  
  getRadius() {
    return this.radius;
  }
}
