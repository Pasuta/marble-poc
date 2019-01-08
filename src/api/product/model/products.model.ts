import { prop, Ref, Typegoose } from 'typegoose';
import { Category } from '../../category/model/category.model';

export class Product extends Typegoose {
  @prop({ required: true })
  public title?: string;

  @prop({ required: true })
  @prop({ ref: Category, required: true })
  public category?: Ref<Category>;

  @prop({ required: true })
  public bestOffer?: boolean;

  @prop({ required: true })
  public weight?: number;

  @prop({ required: true })
  public id?: number;

  @prop({ required: true })
  public price?: number;

  @prop({ required: true })
  public freeDrink?: object;
}
