import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryDao } from '../model/category.dao';

export const getCategoryByTitleEffect$: Effect = req$ =>
  req$.pipe(
    map(req => req.params.category),
    mergeMap(CategoryDao.findByTitle),
    map(category => ({ body: category })),
    catchError(() => throwError(
      new HttpError('Category does not exist', HttpStatus.NOT_FOUND),
    )),
  );
