class App extends Entity {
  constructor() {
    const appEl = document.getElementById('app');
  
    super(appEl);
    
    this.setWidth();
  }
  
  getWidth() {
    return this.width;
  }
  
  setWidth() {
    this.width = this.element.offsetWidth / 2;
  }
}
