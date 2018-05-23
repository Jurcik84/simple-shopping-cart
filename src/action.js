

export function getSum() {

    return function (dispatch) {

        dispatch({
            type: "GET_TOTAL_SUM",
        })
    }
}

export function addToCart(item, index) {

    return function (dispatch) {

        dispatch({
            type: "ADD_TO_CART",
            item,
            index
        });

        dispatch({
            type: "UPDATE_CART",
            item,
            index
        }),

        dispatch({

            type: 'CART_STATISTICS',
            item,index
        })

    }
}