import Category from "./category";

export default interface iCategoryDataAccess {
    searchAll() : Array<Category>;

    find(id: string) : Category|null;

    create(category: Category) : void;

    edit(category: Category) : void;

    enable(id: string) : void;

    disable(id: string) : void;

    move(id: string, lastPosition: number, newPosition: number) : void;

    delete(id: string) : void;
}