import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Hombre araña', 'Superman','Hulk','Goku','Capitan america'];
  heroeBorrado: string = '';

  borrar() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(`borrando() ${ this.heroeBorrado }...`);
  }
}
