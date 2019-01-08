import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryDao } from '../../category/model/category.dao';
import { ProductsDao } from '../model/products.dao';

export const getProductByCategoryEffect$: Effect = req$ =>
  req$.pipe(
    map(req => req.params.category),
    mergeMap(CategoryDao.findByTitle),
    map(category => category && category._id ? category._id : category),
    mergeMap(ProductsDao.findByCategory),
    map(product => ({ body: product })),
    catchError(() => throwError(
      new HttpError('Product does not exist', HttpStatus.NOT_FOUND),
    )),
  );
