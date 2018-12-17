import { combineRoutes, EffectFactory } from '@marblejs/core';
import { getAllCategoriesEffect$ } from './effects/getAllCategories.effect';
import { getCategoryByTitleEffect$ } from './effects/getCategoryByTitle.effect';

export const getAllCategories$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getAllCategoriesEffect$);

export const getCategoryByTitle$ = EffectFactory
  .matchPath('/:category')
  .matchType('GET')
  .use(getCategoryByTitleEffect$);

export const categories$ = combineRoutes('/category', {
  effects: [getAllCategories$, getCategoryByTitle$],
});
