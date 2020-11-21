import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addItemAC} from '../../../redux/shopping-reducer'
import styles from './Form.module.css'


const Form = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const addClickHandler = () => {
        if (name && quantity) {
            dispatch(addItemAC({name: name, quantity: quantity.toString()}))
            setName('')
            setQuantity('')
        }
    }

    const onChangeNameHadler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onChangeQuantityHadler = (e: ChangeEvent<HTMLInputElement>) => {
        const onlyNumbersPattern = /^[0-9\b]+$/
        if (e.target.value === '' || onlyNumbersPattern.test(e.target.value)) {
            setQuantity(e.currentTarget.value)
        }
    }

    return (
        <div className={styles.form}>
            <input value={name}
                   type='text'
                   onChange={onChangeNameHadler}
                   className={styles.input}/>

            <input value={quantity}
                   type='text'
                   pattern="[0-9]*"
                   onChange={onChangeQuantityHadler}
                   className={styles.input}/>

            <button
                onClick={addClickHandler}
                className={styles.button}>Add Item
            </button>
        </div>

    )
}

export default Form
