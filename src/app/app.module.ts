import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//app_routes
import {app_routing} from './app.routes';
//services
import {CaracteristicaService} from './components/services/caracteristicas.services';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CaracteristicasComponent,
    FooterComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    CaracteristicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
