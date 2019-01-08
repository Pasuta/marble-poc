import { combineRoutes, EffectFactory } from '@marblejs/core';
import { categories$ } from './category';
import { notFoundEffect$ } from './common/effects/notFound.effect';
import { versionEffect$ } from './common/effects/version.effect';
import { products$ } from './product';
import { users$ } from './user';

const root$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(versionEffect$);

const notFound$ = EffectFactory
  .matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/api/v1', [
  root$,
  categories$,
  users$,
  products$,
  notFound$,
]);
