class Screen extends Entity {
  constructor(api) {
    const screenEl = document.createElement('div');
    screenEl.classList.add('screen');
  
    super(screenEl);
    
    this.api = api;
    
    const size = this.api.getWidth();
    this.width = size;
    this.height = size;
    
    this.styleManager = new StyleManager('screen', {
      position: 'relative',
      width: `${this.width}px`,
      height: `${this.height}px`,
      overflow: 'hidden',
    });
    
    this.draw();
  }
  
  draw() {
    this.width = this.api.getWidth();
    
    this.styleManager.addStyles({
      width: `${this.width}px`,
      height: `${this.width}px`,
      perspective: `${this.width / 2}px`,
    });
    this.styleManager.draw();
  }
  
  getWidth() {
    return this.width;
  }
}
