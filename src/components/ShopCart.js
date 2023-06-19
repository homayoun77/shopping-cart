import React, { useContext } from 'react'
import styles from './ShopCart.module.css'
import { CartContext } from '../context/CartContextProvider'

import Cart from './shared/Cart'
import { Link } from 'react-router-dom'

function ShopCart() {

  const { state, dispatch } = useContext(CartContext)

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {
          state.selectedItems.map(item => <Cart key={item.id} data={item} />)
        }
      </div>
      {
        state.itemsCounter > 0 && <div className={styles.payment}>
          <p><span>Total Items :</span> {state.itemsCounter} </p>
          <p><span>Total Payment : </span> {state.total} </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
          </div>
        </div>
      }

      {
        state.checkout && <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to='/products'>Buy More</Link>
        </div>
      }

      {
        !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
          <h3>want to buy</h3>
          <Link to='/products'>go to shop</Link>
        </div>
      }
    </div>
  )
}

export default ShopCart