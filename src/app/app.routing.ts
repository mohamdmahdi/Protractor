import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'books' },
    {
        path: '',
        children: [{
            path: 'books', loadChildren: '../app/books/books.module#BooksModule',
            canActivate: []
        }]
    }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
