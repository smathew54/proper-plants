import { useEffect } from "react";

export default function Plant({ plant, image, shoppingCart, setShoppingCart }) {


  //here is where I create the function
  const clicker = () => {
    const foundItem = shoppingCart.find((item) => item.name === plant);

    console.log(`${plant} clicked`)
    if (foundItem) {
      console.log("it was here")
      setShoppingCart(shoppingCart.map(item =>
        item.name === plant ? {...item, quantity: item.quantity + 1, image:image}: item
      ));
      console.log(shoppingCart)
    }
    else {
      console.log("Not in the shopping cart")
      setShoppingCart([...shoppingCart, { name: plant, quantity: 1, image:image} ]);
      console.log(shoppingCart)
    }
    
}

  return (
  <div> {image}
  <h4>{plant}</h4>
  <button 
  type = "button"
  onClick={clicker}>
    CLICK ME
  </button>
  </div>
  );
}
