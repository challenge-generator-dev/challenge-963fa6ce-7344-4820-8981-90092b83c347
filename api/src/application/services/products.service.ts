import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductResponseDto } from '../dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: any,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    const product = new Product(
      createProductDto.name,
      createProductDto.description,
      createProductDto.price,
      createProductDto.category,
    );

    const createdProduct = await this.productRepository.create(product);
    return ProductResponseDto.fromDomain({
      id: createdProduct.id,
      name: createdProduct.name,
      description: createdProduct.description,
      price: createdProduct.price,
      category: createdProduct.category,
    });
  }

  async findById(id: string): Promise<ProductResponseDto> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return ProductResponseDto.fromDomain({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    const existingProduct = await this.productRepository.findById(id);
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    existingProduct.updateDetails({
      name: updateProductDto.name,
      description: updateProductDto.description,
      price: updateProductDto.price,
      category: updateProductDto.category,
    });

    const updatedProduct = await this.productRepository.update(id, existingProduct);
    return ProductResponseDto.fromDomain({
      id: updatedProduct.id,
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      category: updatedProduct.category,
    });
  }

  async delete(id: string): Promise<void> {
    const existingProduct = await this.productRepository.findById(id);
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    await this.productRepository.delete(id);
  }

  async findAll(): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.findAll();
    return products.map((product: Product) =>
      ProductResponseDto.fromDomain({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
      }),
    );
  }
}