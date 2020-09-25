import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './navbar'

function App() {
  return (
    <div className="App">
      {/* <h1>Cart</h1> */}
      <Navbar />
      <Cart />
    </div>
  );
}
export default App;