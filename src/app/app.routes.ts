
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosYProyectosComponent } from './components/productos-yproyectos/productos-yproyectos.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { CapacitacionComponent } from './components/capacitacion/capacitacion.component';
import { OutsourcingComponent } from './components/outsourcing/outsourcing.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ErpComponent } from './components/erp/erp.component';
import { LoginComponent } from './components/login/login.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServiciosComponent },
    { path: 'products', component: ProductosYProyectosComponent },
    { path: 'bolsa', component: BolsaComponent },
    { path: 'capacitacion', component: CapacitacionComponent },
    { path: 'outsourcing', component: OutsourcingComponent },
    { path: 'desarrollo', component: DesarrolloComponent },
    { path: 'newaccount', component: NewAccountComponent },
    { path: 'erp', component: ErpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'noticia/:id', component: ViewNewsComponent },
    { path: 'note/:id', component: ViewNotesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);