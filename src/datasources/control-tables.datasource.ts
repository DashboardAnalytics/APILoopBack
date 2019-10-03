import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './control-tables.datasource.json';

export class ControlTablesDataSource extends juggler.DataSource {
  static dataSourceName = 'controlTables';

  constructor(
    @inject('datasources.config.controlTables', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
