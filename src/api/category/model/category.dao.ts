import { from } from 'rxjs';
import { Category } from './category.model';

export namespace CategoryDao {
  export const category = new Category().getModelForClass(Category);

  export const findAll = () => from(
    category.find().exec(),
  );

  export const findByTitle = (title: string) => from(
    category.findOne({title: title}).exec(),
  );
}
