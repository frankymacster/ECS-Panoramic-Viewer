const rotateSides = [
  'rotateX(0)',
  'rotateX(180deg)', 
  'rotateY(90deg)',
  'rotateY(-90deg)',
  'rotateX(90deg)',
  'rotateX(-90deg)',
];

const faceElColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
];

class Face extends Entity {
  constructor(idx) {
    const faceEl = document.createElement('div');
    faceEl.classList.add(`face${idx}`);
  
    super(faceEl);
    
    this.idx = idx;
    
    this.styleManager = new StyleManager(`face${this.idx}`, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'background-color': `${faceElColors[this.idx - 1]}`,
    });
  }
  
  draw(transformStyle = '', radius) {
    this.styleManager.addStyles({
      transform: `${transformStyle} ${rotateSides[this.idx - 1]} translateZ(${radius}px)`,
    });
    this.styleManager.draw();
  }
}
