import Category from "../../category/domain/category";
import Menu from "../../menu/domain/menu";

export default class Dish {
    private id: string;
    private name: string;
    private description?: string|null = null;
    private price?: number|null = null;
    private categories: Array<Category>;
    private menus: Array<Menu>;
    private position?: Number|null;

    constructor(
        id: string, 
        categories: Array<Category>, 
        menus: Array<Menu>,
        name: string,
        position?: Number|null
    ) {
        this.id = id;
        this.categories = categories;
        this.menus = menus;
        this.name = name;
        this.position = position;
    }
}
