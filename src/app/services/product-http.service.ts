import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpService implements ProductService {
  protected url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async create(data: CreateProductDto): Promise<Product> {
    const { data: product } = await axios.post<Product>(this.url, data);
    return product;
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}
