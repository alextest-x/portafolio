import { Producto } from './../interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Producto } from '../interfaces/producto.interface';
//import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  //definimos un arreglo para ocuparlo en portafolio.component.ts
  //lo inyectamos con el constructor
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient ) {
   this.cargarProductos();

  }


  private cargarProductos(){
  return new Promise(  ( resolve, reject ) => {
     this.http.get('https://angular-html-f6af5-default-rtdb.firebaseio.com/productos_idx.json')
         //.subscribe(( resp:  Producto[] ) => {
          .subscribe( ( resp: any ) => {

      //console.log(resp);
      this.productos = resp;
      this.cargando = false;

      //setTimeout(() => {
      //this.cargando = false;
      //resolve();
      // }, 2000);
     });
  });

  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despu�s de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

}
