import { ADD_FAV, FILTER, ORDER_CARDS, REMOVE_ALL_FAV, REMOVE_FAV } from "./actions-types"

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

export const removeAllFav = (id) => {
    return{
        type: REMOVE_ALL_FAV
    }
}
export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}
export const orderCards = (order) => {
    return{
        type: ORDER_CARDS,
        payload: order
    }
}
