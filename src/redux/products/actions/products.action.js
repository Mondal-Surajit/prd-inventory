import * as types from './action.types';
import ProductApi from '../../../data/product.api'

export function loadProductsSuccess(products) {
    return { type : types.LOAD_PRODUCTS_SUCCESS, products}
}

export function loadProducts(){
    return function(dispatch){
        return ProductApi.getAllProducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw(error);
        })
    }
}