const main = () => {
  const app = new App();  
  const screen = new Screen({
    getWidth: app.getWidth.bind(app),
  });  
  const cube = new Cube({
    getRadius: () => {
      return screen.getWidth() / 2;
    },
  });

  app.addChildEntity(screen);
  screen.addChildEntity(cube);

  app.addComponent(new Resizeable({
    observers: [
      app.setWidth.bind(app),
      screen.draw.bind(screen),
      cube.fire.bind(cube),
    ],
  }));
  cube.addComponent(new Rotateable({
    element: cube.element,
    draw: cube.draw.bind(cube),
    getRadius: cube.getRadius.bind(cube),
  }));
  
  app.fire();
  cube.fire();
};
