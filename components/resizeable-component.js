class Resizeable {
	constructor(api) {
    this.api = api;

    window.addEventListener('resize', this.update.bind(this));
	}
	
	update() {
    this.api.observers.forEach(o => {
      o();
    });
  }
}