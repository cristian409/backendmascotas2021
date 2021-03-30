import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Ciudad} from './ciudad.model';
import {HistoriaMedica} from './historia-medica.model';
import {Raza} from './raza.model';
import {SolicitudAdopcion} from './solicitud-adopcion.model';
import {Vacuna} from './vacuna.model';
import {VacunaMascota} from './vacuna-mascota.model';

@model({
  settings: {
    foreignKeys: {
      fkRazaIdMascota: {
        name: 'fkRazaIdMascota',
        entity: 'Raza',
        entityKey: 'id',
        foreignKey: 'razaId',
      },
      fkCiudadIdMascota: {
        name: 'fkCiudadIdMascota',
        entity: 'Ciudad',
        entityKey: 'id',
        foreignKey: 'ciudadId',
      }
    },
  },
})
export class Mascota extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  identificador: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: false,
  })
  imagen: string;

  @belongsTo(() => Raza)
  razaId: number;

  @hasMany(() => HistoriaMedica)
  historiasMedicas: HistoriaMedica[];

  @belongsTo(() => Ciudad)
  ciudadId: number;

  @hasMany(() => SolicitudAdopcion)
  solicitudesDeAdpcion: SolicitudAdopcion[];

  @hasMany(() => Vacuna, {through: {model: () => VacunaMascota}})
  vacunas: Vacuna[];

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
