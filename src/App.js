import React from "react";
import './App.css';
import items from './items';
import moreItems from './moreItems';

import fakeLogo from './fakeLogo.svg';
import ShoppingCart from './ShoppingCart';
import Clicker from "./Clicker";
import ButtonGroup from "./ButtonGroup"

function App() {

  return (
    <div>
      <img src={fakeLogo} id="logo"/>
    <Clicker />
    <ButtonGroup />
    {/* <ShoppingCart items={items} username="Sarah"/>
    <ShoppingCart items={moreItems} username="Fred"/> */}


    </div>
  );
}

export default App;
