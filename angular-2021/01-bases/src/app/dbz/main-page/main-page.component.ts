import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

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
