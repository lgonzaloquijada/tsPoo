import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new BaseHttpService<Product>(this.url);

  async getAll() {
    return this.http.getAll();
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    return this.http.update(id, changes);
  }
}
