import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './navbar'

class App extends React.Component {
    constructor(){
      super();
    this.state = {
          products : [
              {
                  price : 99,
                  title : 'Watch ',
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80',
                  id : 1
              },
              {
                  price : 999,
                  title : 'Mobile phone',
                  qty : 10,
                  img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
                  id : 2
              },
              {
                  price : 9999,
                  title : 'Laptop',
                  qty : 4,
                  img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                  id : 3
              },
          ]
      }
      //Another way
      //this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  //we will create a function and sent it as props and whenever qty will
    //change that func would be called and change state in cart component
  handleIncreaseQuantity = (product) => {
      console.log('Hey plz increase quantity of', product);
      const {products} = this.state;
      //We need to get index of that product as we will change qty of that product only
      const index = products.indexOf(product);
      products[index].qty += 1;

      this.setState({
          products : products
          //we can also just write products
      })
  }
  handleDecreaseQuantity = (product) => {
      console.log('Hey plz decrease quantity of', product);
      const {products} = this.state;
      //We need to get index of that product as we will change qty of that product only
      const index = products.indexOf(product);
      products[index].qty -= 1;

      this.setState({
          products : products
          //we can also just write products
      })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;
      //It will return an other array that will contain 
      //whose id is not equal to given id
      const items = products.filter((item) => item.id !== id );
      this.setState({
          products : items
      })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += product.qty * product.price;
    })
    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart 
         products = {products}  
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style = {{padding : 10, fontSize : 20}}>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}
export default App;