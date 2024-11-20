import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { NovoEventoComponent } from './components/pages/novo-evento/novo-evento.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'evento/novo', component: NovoEventoComponent}
];
