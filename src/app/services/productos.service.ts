import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;

  //definimos un arreglo para ocuparlo en portafolio.component.ts
  //lo inyectamos con el constructor
  productos: Producto[]=[];

  constructor(private http: HttpClient ) {
   this.cargarProductos();

  }


  private cargarProductos(){
  this.http.get('https://angular-html-f6af5-default-rtdb.firebaseio.com/productos_idx.json')
     .subscribe(( resp: any ) => {

      console.log(resp);
      this.productos = resp;
      this.cargando = false;


      setTimeout(() => {
        this.cargando = false;
      }, 1000);

    });

  }
}


