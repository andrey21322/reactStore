import React, { useState } from 'react'
import { FaShoppingCart, FaChevronUp } from "react-icons/fa";
import Order from './Order';


function Cart ({orders, onDelete, minusOrderCount, plusOrderCount}) {

    let [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(cartOpen = !cartOpen)
    }

    const showOrders = (orders) => {
        let sum = 0;
        orders.forEach(el => sum += Number.parseFloat(el.price*el.count))
        sum = Math.floor(sum * 100) / 100
        return(<div>
        <FaChevronUp onClick={()=> openCart()} className='close-btn'/>
        {orders.map(el => (
            <Order onDelete={onDelete} key={el.id} item={el} minusOrderCount={minusOrderCount} plusOrderCount={plusOrderCount} />
        ))}
        <p className='sum'><b>Sum: {sum} UAH</b></p>
        </div>)
    } 
    
    const showNothing = () => {
        return(<div className='empty'> <FaChevronUp onClick={()=> openCart()} className='close-btn'/> Cart is empry :(</div>)
    }
    
    return (
        <>
        <FaShoppingCart onClick={()=> openCart()} className={`shop-cart-btn ${cartOpen && 'active'}`}/> 

        {cartOpen && (
        <div className='shop-cart'> 
            {orders.length > 0 ?
            showOrders(orders) : showNothing()}
        </div>
        )}
      </>
    )
}

export default Cart