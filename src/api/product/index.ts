import { combineRoutes, EffectFactory } from '@marblejs/core';
import { getAllProductsEffect$ } from './effects/getAllProducts.effect';
import { getProductByIdEffect$ } from './effects/getProductById.effect';
import { getProductByCategoryEffect$ } from './effects/getProductByCategory.effect';

export const getAllProducts$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getAllProductsEffect$);

export const getProductById$ = EffectFactory
  .matchPath('/id/:id')
  .matchType('GET')
  .use(getProductByIdEffect$);

export const getProductByCategory$ = EffectFactory
  .matchPath('/category/:category')
  .matchType('GET')
  .use(getProductByCategoryEffect$);

export const products$ = combineRoutes('/products', {
  effects: [
    getAllProducts$,
    getProductById$,
    getProductByCategory$,
  ],
});
