import { Effect } from '@marblejs/core';
import { flatMap, map } from 'rxjs/operators';
import { UsersDao } from '../model/users.dao';

export const getUserListEffect$: Effect = req$ =>
  req$.pipe(
    flatMap(UsersDao.findAll),
    map(body => ({ body })),
  );
