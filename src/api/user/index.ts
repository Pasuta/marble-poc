import { combineRoutes, EffectFactory } from '@marblejs/core';
import { getUserByNameEffect$ } from './effects/getUserByName.effect';
import { getUserListEffect$ } from './effects/getUserList.effect';

export const getUserList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getUserListEffect$);

export const getUserByName$ = EffectFactory
  .matchPath('/:name')
  .matchType('GET')
  .use(getUserByNameEffect$);

export const users$ = combineRoutes('/users', {
  effects: [getUserList$, getUserByName$],
});
