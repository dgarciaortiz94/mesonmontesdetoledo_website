"use client";

import styles from "./items.module.css";

// import styles from "./page.module.css";
import React, {useEffect, useState} from 'react';
import {DndContext, closestCenter, DragEndEvent} from '@dnd-kit/core';
import {SortableContext, arrayMove, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {Item} from './item/item';
import Menu from '@/menu/domain/menu';

export default function Items() {
    let [menus, setMenus] = useState<Menu[]>([]);

    useEffect(() => {
        fetch('http://localhost/mesonmontesdetoledo/public/dashboard/menu', {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(json => json.json())
            .then(data => {
                setMenus(() => data.map((i : Menu) => new Menu(i.id, i.name)));

                console.log(menus);
            });
    }, []);

    const handleDragEnd = (e: DragEndEvent) => {
        const {active, over} = e;

        if (over && active.id !== over.id) {
            const activeItemIndex = menus.findIndex(item => item.id === active.id);
            const overItemIndex = menus.findIndex(item => item.id === over.id);

            setMenus(items => {
                return arrayMove(items, activeItemIndex, overItemIndex);
            });

            fetch('http://localhost/mesonmontesdetoledo/public/dashboard/menu/move', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    'activeItemIndex': active.id,
                    'overItemIndex': over.id,
                })
            })
                .then(json => json.json())
                .then(data => {
                    // setMenus(() => data.map((i : Menu) => new Menu(i.id, i.name)));
    
                    console.log(menus);
                })
                .catch(error => {
                    console.log(error);

                    setMenus(items => {
                        return arrayMove(items, overItemIndex, activeItemIndex);
                    });
                });
        }
    };

    return (
        <main>
            <div className={`${styles.searchBar}`}>
                <input type="text" name="search" className={`${styles.searchBar__input} fa`} placeholder='&#xf002;' />
                <button className='btn btn-success btn-sm'><i className="fa-solid fa-plus"></i> Añadir</button>
            </div>

            <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
                <SortableContext items={menus} strategy={verticalListSortingStrategy}>
                    {
                        menus.map(menu => (
                            <Item menu={menu} key={menu.id} />
                        ))
                    }
                </SortableContext>
            </DndContext>
        </main>
    );
}
