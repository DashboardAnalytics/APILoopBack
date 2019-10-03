import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ControlTable} from '../models';
import {ControlTableRepository} from '../repositories';

export class ControlTableControllerController {
  constructor(
    @repository(ControlTableRepository)
    public controlTableRepository : ControlTableRepository,
  ) {}

  @post('/control-tables', {
    responses: {
      '200': {
        description: 'ControlTable model instance',
        content: {'application/json': {schema: getModelSchemaRef(ControlTable)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ControlTable, {exclude: ['id']}),
        },
      },
    })
    controlTable: Omit<ControlTable, 'id'>,
  ): Promise<ControlTable> {
    return this.controlTableRepository.create(controlTable);
  }

  @get('/control-tables/count', {
    responses: {
      '200': {
        description: 'ControlTable model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ControlTable)) where?: Where<ControlTable>,
  ): Promise<Count> {
    return this.controlTableRepository.count(where);
  }

  @get('/control-tables', {
    responses: {
      '200': {
        description: 'Array of ControlTable model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ControlTable)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ControlTable)) filter?: Filter<ControlTable>,
  ): Promise<ControlTable[]> {
    return this.controlTableRepository.find(filter);
  }

  @patch('/control-tables', {
    responses: {
      '200': {
        description: 'ControlTable PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ControlTable, {partial: true}),
        },
      },
    })
    controlTable: ControlTable,
    @param.query.object('where', getWhereSchemaFor(ControlTable)) where?: Where<ControlTable>,
  ): Promise<Count> {
    return this.controlTableRepository.updateAll(controlTable, where);
  }

  @get('/control-tables/{id}', {
    responses: {
      '200': {
        description: 'ControlTable model instance',
        content: {'application/json': {schema: getModelSchemaRef(ControlTable)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ControlTable> {
    return this.controlTableRepository.findById(id);
  }

  @patch('/control-tables/{id}', {
    responses: {
      '204': {
        description: 'ControlTable PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ControlTable, {partial: true}),
        },
      },
    })
    controlTable: ControlTable,
  ): Promise<void> {
    await this.controlTableRepository.updateById(id, controlTable);
  }

  @put('/control-tables/{id}', {
    responses: {
      '204': {
        description: 'ControlTable PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() controlTable: ControlTable,
  ): Promise<void> {
    await this.controlTableRepository.replaceById(id, controlTable);
  }

  @del('/control-tables/{id}', {
    responses: {
      '204': {
        description: 'ControlTable DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.controlTableRepository.deleteById(id);
  }
}
