

export function getSum() {

    return function (dispatch) {

        dispatch({
            type: "GET_TOTAL_SUM",
        })
    }
}


export function addToCart(item,index){

    return function(dispatch){

         dispatch({
             type: "ADD_TO_CART",
             item,
             index
         })

    }
}