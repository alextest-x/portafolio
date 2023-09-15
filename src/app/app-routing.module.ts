import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  //definiendo las rutas en un arreglo
  //ponemos {useHash} para que cuando suba la gitpages lo reconozca
  //y todas las paginas pone un # y lo que viene despues de # no es un directorio en el sitio web
  //es una parte de la ruta del index.html que se encuentra en esa direccion
  //en caso de no tener el httpaccess para configurar las rutas
  
  //se exporta para que se pueda usar afuera este componente
   imports: [
            RouterModule.forRoot(app_routes, { useHash:true })
  ],
 exports: [
     RouterModule
     ]
 })
 export class AppRoutingModule { }






