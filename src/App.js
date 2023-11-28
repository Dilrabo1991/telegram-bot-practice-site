import React, { useState, useEffect } from 'react'
import './App.css'
import './components/Button.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'

const { getData } = require('./components/db/db')
const foods = getData()
const telegram = window.Telegram.WebApp;


const App = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    telegram.ready()
  }, [])

  const onAdd = (food) => {
    console.log(food, "in add fun")
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: -1 }]);
    }
  }
  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  const onCheckout = () => {
    telegram.MeinButton.txt = "Order Placed"
    telegram.MeinButton.show()
  };
  return (
    <div>
      <h1 className='heading'>Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className='cards__container'>
        {
          foods ?
            foods.map(food => {
              return (
                <Card key={food.id} food={food} onAdd={onAdd} onRemuve={onRemove} />

              )
            }) :
            <div>Loading....</div>
        }
      </div>

    </div>
  )
}

export default App
