import React from 'react';
import CartItem from './CartItem';

//creating class based component here
//While creating class based you need to use render() function

class Cart extends React.Component{
    render(){
        const arr = [1,2,3,4,5];
        return(
            <div className = "cart">
                {arr.map((item) => {
                    return item + 5;
                })}
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
                {/* CART */}
            </div>
        );
    }
}

export default Cart;