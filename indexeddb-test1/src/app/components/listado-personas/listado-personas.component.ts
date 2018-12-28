import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona, Sexo } from '../../models/persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService) {
    this.personasService.getPersons().then((personas) => {
      console.log(personas);
      this.personas = personas;
    });
   }

  ngOnInit() {

  }

}
