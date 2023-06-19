import React, { useContext } from 'react'

import shopCart from '../../assets/icons/shop.svg'

import { CartContext } from '../../context/CartContextProvider'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {

    const {state} = useContext(CartContext)
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link className={styles.productLink} to='/products'>Products</Link>
            <div className={styles.iconContainer}>
                <Link to='/cart'><img src={shopCart} alt="shop" /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar