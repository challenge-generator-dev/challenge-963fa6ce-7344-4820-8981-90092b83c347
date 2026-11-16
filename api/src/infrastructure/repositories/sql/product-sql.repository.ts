// TODO(reto): Implementar las operaciones CRUD para base de datos SQL (PostgreSQL)
// Usa TypeORM para interactuar con la base de datos
// Asegúrate de manejar errores adecuadamente y validar los datos antes de persistirlos

import { Injectable } from '@nestjs/common';
import { Product } from '../../../domain/entities/product.entity';
import { ProductRepository } from '../../../domain/repositories/product.repository';

@Injectable()
export class ProductSqlRepository implements ProductRepository {
  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar creación de producto en SQL
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar búsqueda de producto por ID en SQL
    throw new Error('Method not implemented');
  }

  async update(id: string, product: Product): Promise<Product> {
    // TODO(reto): Implementar actualización de producto en SQL
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar eliminación de producto en SQL
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar listado de todos los productos en SQL
    throw new Error('Method not implemented');
  }
}