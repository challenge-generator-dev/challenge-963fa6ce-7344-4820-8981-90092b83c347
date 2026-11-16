import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  category: string;
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