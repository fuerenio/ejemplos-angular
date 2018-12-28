import { Injectable } from '@angular/core';
import { TestDaoService } from './test-dao.service';
import { Persona } from '../models/persona';
import { Sexo } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private generosPersona: Sexo[];

  constructor(private testDaoService: TestDaoService) {
    this.generosPersona = [
      {id: -1, descripcion: 'Seleccione'},
      {id: 1, descripcion: 'Femenino'},
      {id: 2, descripcion: 'Masculino'}
    ];
  }
  getGeneros(): Sexo[] {
    return this.generosPersona;
  }
  getPersons(): Promise<Persona[]> {
    return this.testDaoService.getAll();
  }

  save(persona: Persona): Promise<any> {
    return this.testDaoService.save(persona);
  }

  newPerson(): Persona {
    let persona: Persona;
    persona = {
      nombre: '',
      apellidos: '',
      email: '',
      edad: 0,
      direccion: '',
      sexo: -1,
      fechaRegistro: new Date()
    };

    return persona;
  }
}
