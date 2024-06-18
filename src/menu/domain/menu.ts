import Category from "../../category/domain/category";
import Dish from "../../dish/domain/dish";

export default class Menu {
    public id: string;
    public name?: string|null = null;
    public categories?: Array<Category>;
    public dishes?: Array<Dish>;

    constructor(
        id: string, 
        name?: string|null,
        categories?: Array<Category>, 
        dishes?: Array<Dish>
    ) {
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.dishes = dishes;
    }
}
