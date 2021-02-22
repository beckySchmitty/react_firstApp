import React from "react"
import './App.css';
import items from './items'
import ShoppingCart from './ShoppingCart';

function App() {

  return (
    <ShoppingCart items={items}/>
  );
}

export default App;
