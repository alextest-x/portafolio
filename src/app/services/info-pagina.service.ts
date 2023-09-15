import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

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

   equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

// private cargarInfo() {
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
}
*/

    private cargarInfo() {
      this.http.get('assets/data/data-pagina.json')
      .subscribe( ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
        });
      }


      private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      // console.log(resp);
    });


    // this.equipo = resp
  }

}
