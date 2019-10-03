import {DefaultCrudRepository} from '@loopback/repository';
import {ControlTable, ControlTableRelations} from '../models';
import {ControlTablesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ControlTableRepository extends DefaultCrudRepository<
  ControlTable,
  typeof ControlTable.prototype.id,
  ControlTableRelations
> {
  constructor(
    @inject('datasources.controlTables') dataSource: ControlTablesDataSource,
  ) {
    super(ControlTable, dataSource);
  }
}
