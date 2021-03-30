import {belongsTo, Entity, model, property} from '@loopback/repository';
import {EstadoSolicitud} from './estado-solicitud.model';
import {Mascota} from './mascota.model';
import {Persona} from './persona.model';

@model({
  settings: {
    foreignKeys: {
      fkMascotaIdSolicitud: {
        name: 'fkMascotaIdSolicitud',
        entity: 'Mascota',
        entityKey: 'id',
        foreignKey: 'mascotaId',
      },
      fkPersonaIdSolicitud: {
        name: 'fkPersonaIdSolicitud',
        entity: 'Persona',
        entityKey: 'id',
        foreignKey: 'personaId',
      },
      fkEstadoIdSolicitud: {
        name: 'fkEstadoIdSolicitud',
        entity: 'EstadoSolicitus',
        entityKey: 'id',
        foreignKey: 'estadoSolicitudId',
      },
    },
  },
})
export class SolicitudAdopcion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Mascota)
  mascotaId: number;

  @belongsTo(() => Persona)
  personaId: number;

  @belongsTo(() => EstadoSolicitud)
  estadoSolicitudId: number;

  constructor(data?: Partial<SolicitudAdopcion>) {
    super(data);
  }
}

export interface SolicitudAdopcionRelations {
  // describe navigational properties here
}

export type SolicitudAdopcionWithRelations = SolicitudAdopcion & SolicitudAdopcionRelations;
