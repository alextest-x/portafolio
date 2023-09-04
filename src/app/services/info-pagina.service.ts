
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../interfaces/info-pagina.interface';
//import { InfoEquipo } from './../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


  //poniendo la interface InfoPagina en lugar de any[]
  //info:any ={}

   info: InfoPagina = {};
   cargada = false;

   //equipo: EquipoPagina [] = [];
   //equipo: InfoEquipo [] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
   // this.cargarEquipo();


  }


//leer el archivo JSON para leer sus propiedades y ponerlas en las paginas
// necesito un modulo que haga petiiones http y hay que importarlo en el app.module
//para usar get delet update

//leer el archivo JSON
//no la ejecuta hasta que no haya un subscribe que
//recibe una respuesta
/*
this.http.get('assets/data/data-pagina.json')
.subscribe( (resp : InfoPagina) => {

  this.cargada = true;
  this.info = resp;

   console.log(resp);
   //console.log( resp['twitter'] );

});
*/

    private cargarInfo() {
      this.http.get('assets/data/data-pagina.json')
      .subscribe( ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
        });
      }
}
