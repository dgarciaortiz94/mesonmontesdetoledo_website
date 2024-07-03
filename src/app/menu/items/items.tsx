"use client";

import styles from "./items.module.css";

// import styles from "./page.module.css";
import React, { useContext, useEffect } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { Item } from './item/item';
import { MenusContext } from "@/app/menu/menusContext";

export default function Items() {
    const { menus, readMenus, moveMenu } = useContext(MenusContext);

    useEffect(() => {
        async function getMenus() {
            try {
                await readMenus();   
            } catch (error) {
                console.error("Error al leer los menus", error);
            }

            return;
        };

        getMenus();
    }, []);

    async function handleDragEnd(e: DragEndEvent) {
        const {active, over} = e;

        if (over && active.id !== over.id) {
            const activeItemIndex = menus.findIndex(item => item.id === active.id);
            const overItemIndex = menus.findIndex(item => item.id === over.id);

            arrayMove(menus, activeItemIndex, overItemIndex);

            try {
                await moveMenu(menus, active.id.toString(), over.id.toString());
            } catch (error) {
                arrayMove(menus, overItemIndex, activeItemIndex);
            }
        }
    };

    return (
        <main className="crud-panel">
            <div className={`${styles.searchBar} row`}>
                <div className="col-8 col-md-10">
                    <input type="text" name="search" className={`${styles.searchBar__input} fa`} placeholder='&#xf002; Buscar' />
                </div>
                <div className="col-4 col-md-2 d-flex justify-content-end">
                    <button type="button" className='btn btn-success btn-sm' data-bs-toggle="modal" data-bs-target="#pageModal"><i aria-hidden className="fa-solid fa-plus"></i> Añadir</button>
                </div>
            </div>

            <div className="reactive-table">
                <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
                    <SortableContext items={menus} strategy={verticalListSortingStrategy}>
                        {
                            menus.map(menu => (
                                <Item menu={menu} key={menu.id} />
                            ))
                        }
                    </SortableContext>
                </DndContext>
            </div>
        </main>
    );
}
