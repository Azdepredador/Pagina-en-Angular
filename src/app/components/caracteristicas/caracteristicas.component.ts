import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CaracteristicaService} from '../../components/services/caracteristicas.services';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styles: []
})
export class CaracteristicasComponent implements OnInit {
  caracteristicas:any[]=[];

  constructor(
    private caracteristicaService:CaracteristicaService,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.caracteristicas=this.caracteristicaService.getCaracteristica();
  }

}
