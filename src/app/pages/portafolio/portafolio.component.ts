import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

//ocupa el servico ProductosService para podelo leer en un ngFor
// en la vista portafolio.html
  constructor( public productosService:  ProductosService){}
  ngOnInit() {
  }




}
