import React from 'react';
import CartItem from './CartItem';

//creating class based component here
//While creating class based you need to use render() function

class Cart extends React.Component{
    render(){
        return(
            <div className = "cart">
                <CartItem />
                <CartItem />
                <CartItem />
                {/* CART */}
            </div>
        );
    }
}

export default Cart;