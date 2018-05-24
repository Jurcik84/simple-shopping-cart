
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import {reducer} from './reducer'


export default  createStore(reducer, {

    stock: [
        {
            id: 1,
            name: 'iPhone',
            price: 300,
            inStock: 5
        },
        {
            id: 2,
            name: 'iPad',
            price: 300,
            inStock: 5
        }, {
            id: 3,
            name: 'iPod',
            price: 300,
            inStock: 5
        }
    ],
    sum: 0,
    itemCount: null,
    cart: [],
    toPay: 0,
    basket: {},
    inCart:0

}
    , applyMiddleware(thunk)
)