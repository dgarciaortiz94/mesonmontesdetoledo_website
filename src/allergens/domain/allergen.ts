export default class Allergen {
    public id: string;
    public name?: string|null = null;
    public icon?: string|null = null;

    constructor(
        id: string, 
        name?: string|null,
        icon?: string|null
    ) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}
