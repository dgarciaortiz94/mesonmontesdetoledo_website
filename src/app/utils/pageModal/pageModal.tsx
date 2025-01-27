'use client';

import CreateMenuForm from '@/app/menu/create/createMenuForm';
import React from 'react';

export function PageModal() {
    return (
        <main className="modal fade" id="pageModal" tabIndex={-1} data-bs-backdrop="static" aria-labelledby="pageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="pageModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <CreateMenuForm></CreateMenuForm>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </main>
    );
}