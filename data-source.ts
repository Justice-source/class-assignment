import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: 'password',
  database: "test",
  // logging: true,
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // entities: [__dirname + '/../**/*.entity.ts'],
  entities: ["dist/**/*.entity.js"],
   migrations: ["dist/migrations/*.js"],
  // migrations: ["database/migrations/*{.ts,.js}"],
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource