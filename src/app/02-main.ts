import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();
productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Description 1',
  categoryId: 1,
  slug: 'product-1',
  images: [],
});

console.log(productService.getAll());

const productId = productService.getAll()[0].id;
productService.update(productId, {
  title: 'Product 1 Updated',
});

console.log(productService.getAll());