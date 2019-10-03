import {Entity, model, property} from '@loopback/repository';

@model({settings: {forceId: false}})
export class ControlTable extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  video_name: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  status: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  video_number: number;

  @property({
    type: 'string',
    required: true,
  })
  store: string;

  @property({
    type: 'string',
    required: true,
  })
  shopping_center: string;


  constructor(data?: Partial<ControlTable>) {
    super(data);
  }
}

export interface ControlTableRelations {
  // describe navigational properties here
}

export type ControlTableWithRelations = ControlTable & ControlTableRelations;
