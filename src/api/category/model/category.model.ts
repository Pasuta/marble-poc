import { prop, Typegoose } from 'typegoose';

export class Category extends Typegoose {
  @prop({ required: true, index: true })
  public title?: string;
}
