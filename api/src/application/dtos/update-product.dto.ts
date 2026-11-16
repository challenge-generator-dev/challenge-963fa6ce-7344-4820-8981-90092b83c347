import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  name?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  description?: string;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  price?: number;

  @IsString()
  @IsOptional()
  @MinLength(3)
  category?: string;
}

export class ProductResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;

  constructor(product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
  }) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
  }

  static fromDomain(product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
  }): ProductResponseDto {
    return new ProductResponseDto(product);
  }
}