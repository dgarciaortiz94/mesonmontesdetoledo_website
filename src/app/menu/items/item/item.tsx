import styles from "./item.module.css";

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Menu from '@/menu/domain/menu';

export function Item(props: {menu: Menu}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.menu.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    

    return (
        <main ref={setNodeRef} style={style} className={`${styles.tableRow}`}>
            <div className="accordion-item">
                <div className={`${styles.tableRow__body} collapsed`} data-bs-toggle="collapse" data-bs-target="#acordion-item-{{menu.id}}">
                    <div {...attributes} {...listeners} className={styles.cursorMove}><i aria-hidden className={`fa-solid fa-grip-vertical px-3 py-2`}></i></div>
                    <div className={`${styles.tableRow__content}`}>
                        <div className={`${styles.tableRow__name}`}>{props.menu.name}</div>
                        <div className={`${styles.tableRow__crud}`}>
                            <div className={`${styles.crud__button}`}><i aria-hidden className="fa-solid fa-eye-slash text-secondary fa-sm"></i></div>
                            <div className={`${styles.crud__button}`}><i aria-hidden className="fa-solid fa-pen-to-square text-warning fa-sm"></i></div>
                            <div className={`${styles.crud__button}`}><i aria-hidden className="fa-solid fa-trash-can text-danger fa-sm"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}