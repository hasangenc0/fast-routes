interface IRouter {
    root: string;
    routes: Map<string, Route>;
    add: Function;
    navigate: Function;
    clearSlashes: Function;
}
export declare class Router implements IRouter {
    root: string;
    routes: Map<string, Route>;
    constructor(root: string);
    add(path: string, name: string, func: Function): void;
    navigate(name: string): void;
    clearSlashes(path: string): string;
    listen(): void;
}
interface IRoute {
    path: string;
    name: string;
}
declare class Route implements IRoute {
    path: string;
    name: string;
    constructor(path: string, name: string);
}
export {};
