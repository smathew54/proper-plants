import React from 'react'
import { useState } from "react";


export default function ShoppingCart({ shoppingCart, setShoppingCart }) {
    console.log("FUNCTION: the shopping cart")
    console.log(shoppingCart)
    
    return (
    <div>
        {shoppingCart.map((plant) => (
            <li key={plant.name} onClick={() => console.log("plant selected")}>
              {plant.image}{plant.name}{plant.quantity}
            <button onClick={() =>(console.log("DELETE: I got clicked to delete something"))}>-</button>
            <button onClick={() =>(console.log("ADD: I got clicked to add something"))}>+</button>

            {/* <button onClick={() =>(console.log("DELETE: I got clicked to delete something"))}>-</button>
            <button onClick={() =>(console.log("ADD: I got clicked to add something"))}>+</button> */}
            </li>
          ))}
    </div>
    )
};
