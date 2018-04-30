class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(fn) {
    this.observers.push(fn);
  }
  
  unsubscribe(fn) {
    this.observers = this.observers.filter(o => {
      if (o !== fn) {
        return o;
      }
    });
  }
  
  fire(args) {
    this.observers.forEach(o => {
      o.call(this, this);
    });
  }
}