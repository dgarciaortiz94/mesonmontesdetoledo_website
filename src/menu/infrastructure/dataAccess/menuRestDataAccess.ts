import IMenuDataAccess from "@/menu/domain/iMenuDataAccess";
import Menu from "@/menu/domain/menu";

export default class MenuRestDataAccess implements IMenuDataAccess {
    async searchAll() : Promise<Response> {
        return await fetch('http://localhost/mesonmontesdetoledo/public/menu', {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    // find(id: string) : Menu|null

    // create(menu: Menu) : void;

    // edit(menu: Menu) : void;

    // enable(id: string) : void;

    // disable(id: string) : void;

    // move(id: string, lastPosition: number, newPosition: number) : void;

    // delete(id: string) : void;
}