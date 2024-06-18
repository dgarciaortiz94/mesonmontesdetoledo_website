import Dish from "./dish";

export default interface iDishDataAccess {
    searchAll() : Array<Dish>;

    find(id: string) : Dish|null;

    create(dish: Dish) : void;

    edit(dish: Dish) : void;

    enable(id: string) : void;

    disable(id: string) : void;

    move(id: string, lastPosition: number, newPosition: number) : void;

    delete(id: string) : void;
}