import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId ?? faker.number.int(),
        name: faker.commerce.department(),
        image: faker.image.url(),
        slug: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}
