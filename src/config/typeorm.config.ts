import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "test",
  synchronize: false,
  // logging: true,
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // entities: [__dirname + '/../**/*.entity.ts'],
  entities: ["dist/**/*.entity.js"],
  migrations: ["database/migrations/*{.ts,.js}"],
}