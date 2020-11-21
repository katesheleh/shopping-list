import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://www.mocky.io/v2',
})

export const shoppingApi = {
    shopList() {
        return instance.get<ShoppingListResponseType[]>(`/5e66606c3100005100239f27`)
    }
}

export type ShoppingListResponseType = {
    name: string
    quantity: string
}