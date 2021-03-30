import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fkMascotaIdVacuna: {
        name: 'fkMascotaIdVacuna',
        entity: 'Mascota',
        entityKey: 'id',
        foreignKey: 'mascotaId',
      },
      fkVacunaIdVacuna: {
        name: 'fkVacunaIdVacuna',
        entity: 'Vacuna',
        entityKey: 'id',
        foreignKey: 'vacunaId',
      }
    },
  },
})
export class VacunaMascota extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  mascotaId?: number;

  @property({
    type: 'number',
  })
  vacunaId?: number;

  constructor(data?: Partial<VacunaMascota>) {
    super(data);
  }
}

export interface VacunaMascotaRelations {
  // describe navigational properties here
}

export type VacunaMascotaWithRelations = VacunaMascota & VacunaMascotaRelations;
