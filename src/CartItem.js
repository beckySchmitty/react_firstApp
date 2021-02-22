import React from "react"
import "./CartItem.css"

const CartItem = ({name, img, price, qty}) => {
    return (
        <div className="CartItem">
        <h3 className="CartItem-h3">{name}</h3>
        <img className="CartItem-img" src={img}/>
        <ul>
          <li>${price}</li>
          <li>{qty}</li>
        </ul>
      </div>
    )
}

export default CartItem;