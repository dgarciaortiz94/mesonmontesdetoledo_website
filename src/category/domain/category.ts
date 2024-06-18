import Dish from "../../dish/domain/dish";
import Menu from "../../menu/domain/menu";

export default class Category {
    private id: string;
    private name?: string|null = null;
    private dishes: Array<Dish>;
    private menus: Array<Menu>;

    constructor(
        id: string, 
        menus: Array<Menu>, 
        dishes: Array<Dish>, 
        name?: string|null
    ) {
        this.id = id;
        this.menus = menus;
        this.dishes = dishes;
        this.name = name;
    }

    // Métodos para acceder y manipular las propiedades pueden ser añadidos aquí
}
