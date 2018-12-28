
export class Persona {
    personId?: number;
    nombre: string;
    apellidos: string;
    email: string;
    edad: number;
    direccion: string;
    sexo: number;
    fechaRegistro: Date;

    /* Este metodo devolvera un string */
    toString(): string {
        return `Persona = {
            nombre=${this.nombre},
            apellidos=${this.apellidos},
            email=${this.email},
            edad=${this.edad},
            direccion=${this.direccion},
            fechaRegistro=${this.fechaRegistro}}
        }`;
    }
}

export interface Sexo {
    id: number;
    descripcion: string;
}
