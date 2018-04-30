class StyleManager {
  constructor(name, styles = {}) {
    this.name = name;
    this.styles = styles;
    
		this.element = document.createElement('style');
    
    document.getElementsByTagName('head')[0].appendChild(this.element);
    
    this.draw();
  }
  
  draw() {
    let stylesStr = `.${this.name} {\n`;
    Object.keys(this.styles).forEach(k => {
      stylesStr += `${k}: ${this.styles[k]};\n`;
    });
    stylesStr += '}';
  
    this.element.innerHTML = stylesStr;
  }
  
  addStyles(styles) {
    Object.keys(styles).forEach(k => {
      this.styles[k] = styles[k];
    });
  }
}