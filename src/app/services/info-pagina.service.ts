import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


  //poniendo la interface InfoPgina en lugar de any[]
  //info:any ={}


   info: InfoPagina = {};

  cargada = false;

  constructor( private http: HttpClient ) {

 console.log('Leer archivo json');

//leer el archivo JSON para leer sus propiedades y ponerlas en las paginas
// necesito un modulo que haga petiiones http y hay que importarlo en el app.module
//para usar get delet update

//leer el archivo JSON
//no la ejecuta hasta que no haya un subscribe que
//recibe una respuesta
this.http.get('assets/data/data-pagina.json')
.subscribe( (resp : InfoPagina) => {

  this.cargada = true;
  this.info = resp;

   console.log(resp);
   //console.log( resp['twitter'] );

});


  }


}
