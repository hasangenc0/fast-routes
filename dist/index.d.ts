interface IRoute {
    path: string;
    page: string;
}
declare class Route implements IRoute {
    path: string;
    page: string;
    constructor(path: string, page: string);
    getRouteName(): void;
}
