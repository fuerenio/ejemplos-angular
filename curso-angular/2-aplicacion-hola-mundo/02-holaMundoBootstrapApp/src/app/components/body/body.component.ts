
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrarCita: boolean;
    idiomas: string[];

    mensaje: any = {
        autor: 'Gonzalo Silverio',
        mensaje: 'Ganar no lo es todo, es lo único.'
    };

    constructor() {
        this.mostrarCita = true;
        this.idiomas = ['Español', 'Ingles', 'Frances'];
    }
}
