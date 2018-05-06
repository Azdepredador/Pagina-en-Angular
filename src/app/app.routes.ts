import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CaracteristicasComponent} from './components/caracteristicas/caracteristicas.component';
import {IntegrantesComponent} from './components/integrantes/integrantes.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'integrantes', component: IntegrantesComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
