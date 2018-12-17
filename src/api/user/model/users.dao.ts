import { from } from 'rxjs';
import { User  } from './users.model';

export namespace UsersDao {
  export const model = new User().getModelForClass(User);

  export const findByName = (name: string) => from(
    model.find({name})
      .exec(),
  );

  export const findAll = () => from(
    model.find()
      .exec(),
  );

}
