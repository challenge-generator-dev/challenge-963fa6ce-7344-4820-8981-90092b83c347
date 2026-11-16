import { v4 as uuidv4 } from 'uuid';

export class Product {
  readonly id: string;
  name: string;
  description: string;
  price: number;
  category: string;

  constructor(
    name: string,
    description: string,
    price: number,
    category: string,
    id?: string
  ) {
    if (!name || name.trim().length === 0) {
      throw new Error('Product name is required');
    }
    if (price <= 0) {
      throw new Error('Product price must be greater than zero');
    }
    if (!category || category.trim().length === 0) {
      throw new Error('Product category is required');
    }

    this.id = id || uuidv4();
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  updateDetails(updateData: {
    name?: string;
    description?: string;
    price?: number;
    category?: string;
  }): void {
    if (updateData.name !== undefined) {
      if (!updateData.name || updateData.name.trim().length === 0) {
        throw new Error('Product name cannot be empty');
      }
      this.name = updateData.name;
    }

    if (updateData.description !== undefined) {
      this.description = updateData.description;
    }

    if (updateData.price !== undefined) {
      if (updateData.price <= 0) {
        throw new Error('Product price must be greater than zero');
      }
      this.price = updateData.price;
    }

    if (updateData.category !== undefined) {
      if (!updateData.category || updateData.category.trim().length === 0) {
        throw new Error('Product category cannot be empty');
      }
      this.category = updateData.category;
    }
  }
}