import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersDao } from '../model/users.dao';

export const getUserByNameEffect$: Effect = req$ =>
  req$.pipe(
    map(req => req.params.name),
    mergeMap(UsersDao.findByName),
    map(user => ({ body: user })),
    catchError(() => throwError(
      new HttpError('User does not exist', HttpStatus.NOT_FOUND),
    )),
  );
