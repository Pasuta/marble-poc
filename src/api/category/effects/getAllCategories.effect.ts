import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryDao } from '../model/category.dao';

export const getAllCategoriesEffect$: Effect = req$ =>
  req$.pipe(
    mergeMap(req => of(req).pipe(
      mergeMap(CategoryDao.findAll),
      map(categories => ({ body: categories })),
      catchError(() => throwError(new HttpError('Categories does not exist', HttpStatus.NOT_FOUND))),
    )),
  );
