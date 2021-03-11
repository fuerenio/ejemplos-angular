import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input("nuevo")
  nuevoPersonaje: Personaje = {
    nombre: 'Pan',
    poder: 0
  };

  constructor(private dbzService: DbzService) {

  }

  agregar() {
    console.log("agregar() > nuevoPersonaje: ", this.nuevoPersonaje);
    if (this.nuevoPersonaje.nombre.trim().length == 0) {
      return;
    }
    
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    };
  }
}
