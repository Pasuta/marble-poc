import { from } from 'rxjs';
import { Category } from './category.model';

export namespace CategoryDao {
  export const model = new Category().getModelForClass(Category);

  export const findAll = () => from(
    model.find().exec(),
  );

  export const findByTitle = (title: string) => {
    console.log(model);

    return from(
      model.findOne({title: title}).exec(),
    );
  } ;
}
