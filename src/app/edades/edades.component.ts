import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edades',
  templateUrl: './edades.component.html',
  styleUrls: ['./edades.component.css']
})
export class EdadesComponent implements OnInit {

  edadUno:number;
  edadDos:number;
  edadPromedio:number;
  edadSuma:number;

  constructor(edadUno:number, edadDos:number) 
  { 
     this.edadUno = edadUno;
     this.edadDos = edadDos;
     this.edadPromedio = this.calcularPromedio(edadUno,edadDos);
     this.edadSuma = this.calcularSuma(edadUno,edadDos);
  }

   calcularPromedio(numOne:number, numTwo:number) : number {
     
     this.edadPromedio = (numOne + numTwo) / 2;
     return this.edadPromedio;
  }

   calcularSuma(numOne:number, numTwo:number) : number {
     
    this.edadSuma = numOne + numTwo;
    return this.edadSuma;
 }

 limpiarCasilleros(){
   this.edadUno = 0;
   this.edadDos = 0;
   this.edadPromedio = 0;
   this.edadSuma = 0;
 }

  ngOnInit(): void {
  }

}
