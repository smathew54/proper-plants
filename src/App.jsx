import { useState } from "react";
import PLANTS from "./data.js";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Plant from "./components/Plant.jsx";

export default function App() {
  //console.log(PLANTS)

  //state variables get added somewhere here
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
        <h2>Plants</h2>
      </header>
      <main>
        <p>Choose your plant!</p>
        <div>
          {PLANTS.map((element) => (
            <Plant
              image={element.image}
              plant={element.name}
              key={element.id}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </div>
        <h2>Cart</h2>
        {shoppingCart.length > 0 ? (
          <div>
            <ShoppingCart 
        shoppingCart = {shoppingCart}
        setShoppingCart = {setShoppingCart}/>
          </div>
        ) : (
          <div>
            <p>Please Choose a Plant</p>
          </div>
        )}       
      </main>
    </>
  );
}
