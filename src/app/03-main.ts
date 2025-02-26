import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productHttpService = new ProductHttpService();

  let products = await productHttpService.getAll();
  console.log('getAll', products.length);
  console.log(
    'getAll',
    products.map((product) => product.title)
  );

  const productId = products[0].id;
  await productHttpService
    .update(productId, {
      title: 'Updated product',
      price: 100,
    })
    .catch((error) => {
      console.error('update', error.message);
    });

  //const updatedProduct = await productHttpService.findOne(productId);
  //console.log('findOne', updatedProduct);
})();
