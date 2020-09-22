import React from 'react';
import CartItem from './CartItem';

//creating class based component here
//While creating class based you need to use render() function

class Cart extends React.Component{
    constructor(){
        super();
       this.state = {
            products : [
                {
                    price : 99,
                    title : 'Watch ',
                    qty : 1,
                    img : '',
                    id : 1
                },
                {
                    price : 999,
                    title : 'Mobile phone',
                    qty : 10,
                    img : '',
                    id : 2
                },
                {
                    price : 9999,
                    title : 'Laptop',
                    qty : 4,
                    img : '',
                    id : 3
                },
            ]
        }
        //Another way
        //this.increaseQuantity = this.increaseQuantity.bind(this);
       // this.testing();
    }
    render(){
        //const arr = [1,2,3,4,5];
        //Destructuring
        const {products} = this.state;
        return(
            <div className = "cart">
                {/* {arr.map((item) => {
                    return item + 5;
                })} */}
                {
                    products.map((product) => {
                        return(
                         <CartItem 
                             product = {product} 
                             key={product.id}
                            //  func={() => console.log("Something")}
                            //  isLoggedin={false}
                            //  jsx={<h1>Test</h1>}
                             //comp={<CartItem />}

                         />
                        )
                    })
                }
                {/* <CartItem qty={1} price={99} title={"watch"} img={""} /> */}
                {/* <CartItem />
                <CartItem /> */}
                {/* CART */}
            </div>
        );
    }
}

export default Cart;