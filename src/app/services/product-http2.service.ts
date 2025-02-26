import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttp2Service extends BaseHttpService<Product> {
  otherMethod() {
    console.log('Other method');
  }
}
