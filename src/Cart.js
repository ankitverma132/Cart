import React from 'react';
import CartItem from './CartItem';

//creating class based component here
//While creating class based you need to use render() function

//class Cart extends React.Component{
    const Cart = (props) => {
    // constructor(){
    //     super();
    //    this.state = {
    //         products : [
    //             {
    //                 price : 99,
    //                 title : 'Watch ',
    //                 qty : 1,
    //                 img : '',
    //                 id : 1
    //             },
    //             {
    //                 price : 999,
    //                 title : 'Mobile phone',
    //                 qty : 10,
    //                 img : '',
    //                 id : 2
    //             },
    //             {
    //                 price : 9999,
    //                 title : 'Laptop',
    //                 qty : 4,
    //                 img : '',
    //                 id : 3
    //             },
    //         ]
    //     }
    //     //Another way
    //     //this.increaseQuantity = this.increaseQuantity.bind(this);
    //    // this.testing();
    // }
    // //we will create a function and sent it as props and whenever qty will
    // //change that func would be called and change state in cart component
    // handleIncreaseQuantity = (product) => {
    //     console.log('Hey plz increase quantity of', product);
    //     const {products} = this.state;
    //     //We need to get index of that product as we will change qty of that product only
    //     const index = products.indexOf(product);
    //     products[index].qty += 1;

    //     this.setState({
    //         products : products
    //         //we can also just write products
    //     })
    // }
    // handleDecreaseQuantity = (product) => {
    //     console.log('Hey plz decrease quantity of', product);
    //     const {products} = this.state;
    //     //We need to get index of that product as we will change qty of that product only
    //     const index = products.indexOf(product);
    //     products[index].qty -= 1;

    //     this.setState({
    //         products : products
    //         //we can also just write products
    //     })
    // }

    // handleDeleteProduct = (id) => {
    //     const {products} = this.state;
    //     //It will return an other array that will contain 
    //     //whose id is not equal to given id
    //     const items = products.filter((item) => item.id !== id );
    //     this.setState({
    //         products : items
    //     })
    // }

        //const arr = [1,2,3,4,5];
        //Destructuring
        // const {products} = this.state;
        const {products} = props;
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
                             key = {product.id}
                             onIncreaseQuantity = {props.onIncreaseQuantity}
                             onDecreaseQuantity = {props.onDecreaseQuantity}
                             onDeleteProduct = {props.onDeleteProduct}
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

export default Cart; 