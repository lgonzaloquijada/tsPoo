import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data;
// service.getAll();

// const service2 = new BaseHttpService<number>();
// service2.data;
// service2.getAll();

// const service3 = new BaseHttpService<Category>();
// service3.data;
// service3.getAll();

(async () => {
  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products'
  );
  const product = await productService.getAll();
  console.log(product);

  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories'
  );
  const category = await categoryService.getAll();
  console.log(category);
})();
