import React from 'react'
import {ShoppingListResponseType} from '../../../api/api'
import styles from './Total.module.css'

const Total = (props: PropsType) => {
    return (
        <div className={styles.total}>
            <p className={styles.colLeft}>
                Total Amount:
            </p>
            <p className={styles.colRight}>
                {props.items.map(item => Number(item.quantity)).reduce((prev, next) => prev + next)}
            </p>
        </div>
    )
}

export default Total

// TYPES
type PropsType = {
    items: ShoppingListResponseType[]
}
