import {Dispatch} from 'redux'
import {shoppingApi, ShoppingListResponseType} from '../api/api'


let initialState: InitialStateType = {
    items: [
        {
            name: '',
            quantity: ''
        }
    ]
} as InitialStateType

export const shoppingReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SHOPPING-LIST':
            return {...state, items: action.items}
        case 'ADD-ITEM':
            return {...state, items: [...state.items, action.item]}
        default:
            return state
    }
}

// Action creators
export const shoppingItemsAC = (items: ShoppingListResponseType[]) => ({type: 'SHOPPING-LIST', items} as const)
export const addItemAC = (item: ShoppingListResponseType) => ({type: 'ADD-ITEM', item} as const)


// THUNK
export const getShoppingItemsTC = () => (dispatch: Dispatch<ActionsType>) => {
    shoppingApi.shopList()
        .then(res => {
            console.log(res.data)
            dispatch(shoppingItemsAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    items: ShoppingListResponseType[]
}

export type ActionsType = ShoppingItemsACType | AddItemACType

export type ShoppingItemsACType = ReturnType<typeof shoppingItemsAC>
export type AddItemACType = ReturnType<typeof addItemAC>
