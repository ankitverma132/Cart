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
      </div>
    );
  }
}
export default App;