import Menu from "@/menu/domain/menu";
import { createContext } from "react";

class MenusContextType {
    public menus: Menu[];
    public readMenus: () => void;
    public moveMenu: (items: Menu[], sourceItemId: string, targetItemId: string) => void;
    public createMenu: (name: string, categories: string[]) => void;

    constructor(
        menus: Menu[], 
        readMenus: () => void, 
        moveMenu: (items: Menu[], sourceItemId: string, targetItemId: string) => void, 
        createMenu: (name: string, categories: string[]) => void
    ) {
        this.menus = menus;
        this.readMenus = readMenus;
        this.moveMenu = moveMenu;
        this.createMenu = createMenu;
    }
}

export const MenusContext = createContext<MenusContextType>(
    new MenusContextType(
        [], 
        () => {}, 
        (items: Menu[], sourceItemId: string, targetItemId: string) => {}, 
        (name: string, categories: string[]) => {}, 
    )
);