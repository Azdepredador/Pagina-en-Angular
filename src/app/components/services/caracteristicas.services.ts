import { Injectable } from '@angular/core';

@Injectable()
export class CaracteristicaService {

  private caracteristicas:any[]=[
    {
      titulo: "Indicación de colores.",
      descripcion:"Cada color indica el estado en el que se encuentra el lugar de estacionamiento, como podemos ver en la imagen.",
      numero:"./assets/img/1.png"
    },
    {
      titulo: "Recomendación de lugar.",
      descripcion:"Podras seleccionar alguno de los bloques representados por las letras (A,B,C,D,E), estos bloques representan los locales, una vez seleccionado la aplicación te recomendará un lugar cercano.",
      numero:"./assets/img/2.png"
    },
    {
      titulo: "Representación de los bloques.",
      descripcion:"Los bloques (A,B,C,D,E) representán los locales y podras observar que locales contiene cada bloque.",
      numero:"./assets/img/3.png"
    },
    {
      titulo: "Localización de lugar.",
      descripcion:"En caso de no recordar donde esta estacionado el vehículo puedes buscarlo desde la aplicación.",
      numero:"./assets/img/4.png"
    },
    {
      titulo: "Límite de tiempo.",
      descripcion:"Una vez seleccionado el lugar de estacionamiento y llenar los datos, tienes 15 minutos para llegar a tu lugar de estacionamiento.",
      numero:"./assets/img/5.png"
    }
  ];


  constructor() {  }


  getCaracteristica(){
    return this.caracteristicas;
  }



}
