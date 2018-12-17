import { prop, Typegoose } from 'typegoose';

export class User extends Typegoose {
  @prop({ required: true })
  public name?: string;

  @prop({ required: true })
  public email?: string;
}
