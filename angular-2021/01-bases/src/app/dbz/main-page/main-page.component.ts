import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [{
    nombre: "Goku",
    poder: 15000
  },
  {
    nombre: "Vegueta",
    poder: 7500
  },
  {
    nombre: "Pikoro",
    poder: 5500
  }];

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(dbzService: DbzService ) {
    
  }

  agregarNuevoPersonaje(event: Personaje): void {
    console.log("agregarNuevoPersonaje()... ", event);
    this.personajes.push(event);
  }

}
