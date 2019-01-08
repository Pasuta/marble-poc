import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsDao } from '../model/products.dao';

export const getProductByIdEffect$: Effect = req$ =>
  req$.pipe(
    map(req => req.params.id),
    mergeMap(ProductsDao.findById),
    map(product => ({ body: product })),
    catchError(() => throwError(
      new HttpError('Product does not exist', HttpStatus.NOT_FOUND),
    )),
  );
