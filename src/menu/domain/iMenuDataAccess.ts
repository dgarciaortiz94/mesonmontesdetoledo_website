import Menu from "./menu";

export default interface iMenuDataAccess {
    searchAll() : Promise<Response>;

    // find(id: string) : Menu|null;

    // create(menu: Menu) : void;

    // edit(menu: Menu) : void;

    // enable(id: string) : void;

    // disable(id: string) : void;

    // move(id: string, lastPosition: number, newPosition: number) : void;

    // delete(id: string) : void;
}