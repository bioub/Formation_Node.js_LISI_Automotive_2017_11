export class Horloge {
  constructor(options = {}) {
    const { container } = options;
    
    if (!container) {
      throw new Error('container est obligatoire');
    }

    this._container = container;
  }
  _render() {
    this._container.innerText = (new Date()).toLocaleTimeString();
  }
  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}


