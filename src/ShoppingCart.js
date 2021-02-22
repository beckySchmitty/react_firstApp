import React from "react"

const ShoppingCart = ({items}) => {
    return (
        <div>
        <h1>Shopping Cart</h1>
        <div>
          {items.map(i => (
            <div>
              <h3>{i.name}</h3>
              <img src={i.img} width="200"/>
              <ul>
                <li>${i.price}</li>
                <li>{i.qty}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ShoppingCart;