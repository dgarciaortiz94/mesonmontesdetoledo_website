import Allergen from "./allergen";

export default interface iAllergenDataAccess {
    searchAll() : Array<Allergen>;

    find(id: string) : Allergen|null;

    create(allergen: Allergen) : void;

    edit(allergen: Allergen) : void;

    enable(id: string) : void;

    disable(id: string) : void;

    move(id: string, lastPosition: number, newPosition: number) : void;

    delete(id: string) : void;
}