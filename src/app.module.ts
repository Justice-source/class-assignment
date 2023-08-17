import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { CartModule } from './cart/cart.module'
import { ProductModule } from './product/product.module'
import { Product } from './product/entities/product.entity'
import { typeOrmConfig } from './config/typeorm.config'
import { dataSourceOptions } from 'data-source'

@Module({
  imports: [
    UserModule,
    CartModule,
    ProductModule,
    TypeOrmModule.forRoot(dataSourceOptions)
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'password',
    //   database: 'test',
    //   entities: [Product],
    //   migrations: ['src/database/migrations/**/*{.ts,.js}'],
    //   synchronize: false,
    //   dropSchema: true
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
