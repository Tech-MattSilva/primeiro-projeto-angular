import { Routes } from '@angular/router';
import { Home } from'./home/home';
import { Contato } from'./contato/contato';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'contato', component: Contato}
];
