import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import {ShoppingListResponseType} from '../../api/api'
import {getShoppingItemsTC} from '../../redux/shopping-reducer'
import Form from './Form/Form'
import Total from './Total/Total'
import styles from './ShoppingList.module.css'
import Items from './Items/Items'


function ShoppingList() {
    const getItems = useSelector<AppRootStateType, ShoppingListResponseType[]>(store => store.shopping.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShoppingItemsTC())
    }, [])

    return (
        <div className={styles.mainWrap}>
            <Form/>
            <Items items={getItems}/>
            <Total items={getItems}/>
        </div>
    )
}

export default ShoppingList
