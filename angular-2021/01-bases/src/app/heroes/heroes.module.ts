import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
   // componentes que componen este modulo
   declarations: [
      HeroeComponent,
      ListadoComponent
   ],
   // Componentes visibles afuera de este modulo
   exports: [
      ListadoComponent
   ],
   // importacion de otros modulos a este
   imports: [
      CommonModule
   ]
})
export class HeroesModule {

}