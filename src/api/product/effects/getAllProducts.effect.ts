import { Effect } from '@marblejs/core';
import { flatMap, map } from 'rxjs/operators';
import { ProductsDao } from '../model/products.dao';

export const getAllProductsEffect$: Effect = req$ =>
  req$.pipe(
    flatMap(ProductsDao.findAll),
    map(body => ({ body })),
  );
