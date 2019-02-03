interface IRouter {
  root: string;
  routes:Map<string, Route>;
  add:Function;
  navigate:Function;
  clearSlashes:Function;
}

export class Router implements IRouter {
  root:string;
  routes = new Map<string, Route>();

  constructor (root:string) {
    this.root = root;
  }

  add(path:string, name:string, func:Function) {
    const url:string = this.clearSlashes(path);
    const route = new Route(url, name);
    this.routes.set(name, route);
  }

  navigate(name:string) {
    console.log(this.routes.get(name)!.name);
    history.pushState(null, 'hasan', this.root + this.routes.get(name)!.path);
  }

  clearSlashes(path:string) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  }

  listen() {
    const self:Router = this;
    const links = document.getElementsByClassName('fast-route');
    for(let i = 0; i < links.length; i++) {
      let url:any = links[i].getAttribute('href');
      if (typeof url !== 'string')
        throw TypeError;
      links[i].addEventListener('click', (e) => {
        e.preventDefault();
        self.navigate(url);
      });
    }
  }

}

interface IRoute {
  path: string;
  name:string;
}

class Route implements IRoute {
  path:string;
  name:string;

  constructor (path:string, name:string) {
    this.path = path;
    this.name = name;
  }
}
