import React from 'react'
import {ShoppingListResponseType} from '../../../api/api'
import styles from './Items.module.css'


const Items = (props: PropsType) => {
    return (
        <div className={styles.items}>
            {
                props.items.map((i) => {
                    return (
                        <div key={Math.random()} className={styles.item}>
                            <p className={styles.colLeft}>{i.name}</p>
                            <p className={styles.colRight}>{i.quantity}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Items

// TYPES
type PropsType = {
    items: ShoppingListResponseType[]
}
