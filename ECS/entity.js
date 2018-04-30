class Entity extends Subject {
  constructor(element) {
    super();
    
    this.element = element;

    this.components = [];
    this.children = [];
  }
  
  addChildEntity(entity) {
    this.children.push(entity);
    this.element.appendChild(entity.element);
  }
  
  addComponent(component) {
    this.subscribe(component.update.bind(component));
    this.components.push(component);
  }
}