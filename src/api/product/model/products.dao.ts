import { from } from 'rxjs';
import { Product } from './products.model';

export namespace ProductsDao {
  export const product = new Product().getModelForClass(Product);

  export const findAll = () => from(
    product.find().exec(),
  );

  export const findById = (id: string) => from(
    product.find({id}).exec(),
  );

  export const findByCategory = (categoryId: string) => from(
    product.find({category: categoryId}).exec(),
  );

}
