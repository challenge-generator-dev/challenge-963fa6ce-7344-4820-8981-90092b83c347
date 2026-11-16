import axios from 'axios';

export interface ProductResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
}

const API_BASE_URL = 'http://localhost:3000';

export const productService = {
  createProduct: async (productData: CreateProductDto): Promise<ProductResponseDto> => {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  },

  getProduct: async (id: string): Promise<ProductResponseDto> => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  },

  updateProduct: async (id: string, productData: UpdateProductDto): Promise<ProductResponseDto> => {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
  },

  deleteProduct: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
  },

  listProducts: async (): Promise<ProductResponseDto[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  }
};