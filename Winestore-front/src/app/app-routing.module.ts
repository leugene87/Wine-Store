
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'home',
        component: NavbarComponent
    },
    {
        path: 'wines',
        component: NavbarComponent
    },
    {
        path: 'addWine',
        component: NavbarComponent
    },
    {
        path: 'auth/login',
        component: NavbarComponent
    },
    {
        path: 'signup',
        component: NavbarComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
