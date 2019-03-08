/* eslint-disable import/prefer-default-export */
export const loginSuccessActionCreator = payload => ({
  type: 'LOGIN_SUCCESS',
  payload,
});
export const loginFailActionCreator = error => ({
  type: 'LOGIN_FAIL',
  error,
});
export const fetchProductsActionCreator = payload => ({
  type: 'FETCH_PRODUCT_SUCCESS',
  payload,
});
export const fetchProductsFailActionCreator = error => ({
  type: 'FETCH_PRODUCT_FAIL',
  error,
});
