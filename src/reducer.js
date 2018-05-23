

function reduceAmount(state, action) {

    return {
        ...state,
        stock: state.stock.map((mItem, mIndex) => {

            if (action.index === mIndex) {

                return {
                    ...mItem,
                    inStock: mItem.inStock === 0 ? 0 : mItem.inStock - 1
                }
            }
            else {
                return mItem
            }
        })
    }
}



function addToCartReducer(state, action) {

    switch (action.type) {

        case "ADD_TO_CART":

            return [...state.cart, {
                ...action.item
            }];

        default:
            return [];

    }
}

export function reducer(state = {}, action) {

    switch (action.type) {

        case "GET_TOTAL_SUM":
            return {
                ...state,
                sum: state.stock.reduce((sum, nex) => {
                    return sum + nex.price;
                }, 0)
            }

        case "GET_ITEM_COUNT":
            return {
                ...state,
                itemCount: state.stock.length
            }

        case "ADD_TO_CART":

            const _addToCart = addToCartReducer(state, action);

            console.log("_addToCart", _addToCart)

            return {
                ...state,
                cart: [...state.cart, {
                    ...action.item
                }],
                stock: state.stock.map((mItem, mIndex) => (action.index === mIndex) ? {
                        ...mItem,
                        inStock: mItem.inStock === 0 ? 0 : mItem.inStock - 1
                    } : mItem
                ),
                toPay: [..._addToCart].reduce((sum, next) => sum + next.price, 0)
            }

        default:
            return state;
    }
}









// function reduceAmount(state, action) {

//     return {
//         ...state,
//         stock: state.stock.map((mItem, mIndex) => {

//             if (action.index === mIndex) {

//                 return {
//                     ...mItem,
//                     inStock: mItem.inStock === 0 ? 0 : mItem.inStock - 1
//                 }
//             }
//             else {
//                 return mItem
//             }
//         })
//     }
// }


// export function reducer(state = {}, action) {

//     switch (action.type) {

//         case "GET_TOTAL_SUM":
//             return {
//                 ...state,
//                 sum: state.stock.reduce((sum, nex) => {
//                     return sum + nex.price;
//                 }, 0)
//             }

//         case "GET_ITEM_COUNT":
//             return {
//                 ...state,
//                 itemCount: state.stock.length
//             }

//         case "ADD_TO_CART":
//             return {
//                 ...state,
//                 cart: [...state.cart, {
//                     ...action.item

//                 }],
//                 stock: state.stock.map((mItem, mIndex) =>

//                     (action.index === mIndex) ? {
//                         ...mItem,
//                         inStock: mItem.inStock === 0 ? 0 : mItem.inStock - 1
//                     } : mItem
//                 ),
//                 toPay: state.cart.reduce((sum, nex) => {
//                     return sum + nex.price;
//                 }, 0)
//             }

//         default:
//             return state;
//     }
// }
