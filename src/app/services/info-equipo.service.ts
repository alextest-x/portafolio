import { InfoEquipo } from './../interfaces/info-equipo.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoEquipoService {

     equipo: InfoEquipo []=[];


     constructor( private http: HttpClient ) {
      this.cargarEquipo();

}

  private cargarEquipo() {
    this.http.get('https://angular-html-f6af5-default-rtdb.firebaseio.com/equipo.json')
       .subscribe((resp: any) =>{
    //.subscribe( (resp: InfoEquipo) => {
    //this.equipo.push(resp);
    //this.equipo.push(resp);
       this.equipo=resp;
       console.log(resp);
       });
     }

}


