import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './infrastructure/controllers/products.controller';
import { ProductsService } from './application/services/products.service';
import { ProductSqlRepository } from './infrastructure/repositories/sql/product-sql.repository';
import { ProductNosqlRepository } from './infrastructure/repositories/nosql/product-nosql.repository';
import { Product } from './domain/entities/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres'),
        database: configService.get<string>('DB_NAME', 'inventory'),
        entities: [Product],
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
        logging: configService.get<boolean>('DB_LOGGING', false),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>(
          'MONGO_URI',
          'mongodb://localhost:27017/inventory',
        ),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'SQL_PRODUCT_REPOSITORY',
      useClass: ProductSqlRepository,
    },
    {
      provide: 'NOSQL_PRODUCT_REPOSITORY',
      useClass: ProductNosqlRepository,
    },
    {
      provide: 'PRODUCT_REPOSITORY',
      useFactory: (configService: ConfigService) => {
        const dbType = configService.get<string>('DB_TYPE', 'sql');
        if (dbType === 'nosql') {
          return new ProductNosqlRepository();
        }
        return new ProductSqlRepository();
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}