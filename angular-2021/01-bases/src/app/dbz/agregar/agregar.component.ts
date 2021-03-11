import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  @Input("misPersonajes")
  personajes: Personaje[] = [];

  @Input("nuevo")
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    console.log("agregar() > nuevoPersonaje: ", this.nuevoPersonaje);
    if (this.nuevoPersonaje.nombre.trim().length == 0) {
      return;
    }
    this.personajes.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    };
  }
}
