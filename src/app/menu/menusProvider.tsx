"use client";

import { useReducer } from 'react';
import { MenusContext } from './menusContext';
import { MenusReducer } from './menusReducer';
import Menu from '@/menu/domain/menu';

export function MenusProvider({ children }: any) {
    const initialState = {
        menus: []
    };

    const [globalState, dispatch] = useReducer(MenusReducer, initialState);

    async function readMenus() {
        const response = await fetch('http://localhost/mesonmontesdetoledo/public/dashboard/menu', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        const menus = data.map((i: Menu) => new Menu(i.id, i.name));

        dispatch({
            type: "read_menus",
            payload: menus
        });
    };

    async function moveMenu(items: Menu[], sourceItemId: string, targetItemId: string) {
        let reorderedItems: Menu[] = items.map(i => ({ ...i }));

        const sourceItemIndex = reorderedItems.findIndex(item => item.id === sourceItemId);
        const targetItemIndex = reorderedItems.findIndex(item => item.id === targetItemId);

        [reorderedItems[sourceItemIndex], reorderedItems[targetItemIndex]] = [reorderedItems[targetItemIndex], reorderedItems[sourceItemIndex]];

        dispatch({
            type: "move_menu",
            payload: reorderedItems
        });

        try {
            const response = await fetch('http://localhost/mesonmontesdetoledo/public/dashboard/menu/move', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    'activeItemIndex': sourceItemId,
                    'overItemIndex': targetItemId,
                })
            });
        } catch (error) {
            dispatch({
                type: "move_menu",
                payload: items
            });

            throw error;
        }
    };

    async function createMenu(name: string, categories: string[]) {
        const response = await fetch('http://localhost/mesonmontesdetoledo/public/dashboard/menu', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                'name': name,
                'categories': categories,
            })
        });

        const data = await response.json();
        console.log('sdasd');
        console.log(data);
        const menu = new Menu(data.id, data.name);

        dispatch({
            type: "create_menu",
            payload: menu
        });
    }

    return (
        <MenusContext.Provider value={{ 
            menus: globalState.menus, 
            readMenus, 
            moveMenu, 
            createMenu
        }}>
            {children}
        </MenusContext.Provider>
    );
}