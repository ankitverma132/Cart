import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './navbar'
import * as firebase from 'firebase';

class App extends React.Component {
    constructor(){
      super();
    this.state = {
          products : [],
          loading : true
          // products : [
          //     {
          //         price : 99,
          //         title : 'Watch ',
          //         qty : 1,
          //         img : 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80',
          //         id : 1
          //     },
          //     {
          //         price : 999,
          //         title : 'Mobile phone',
          //         qty : 10,
          //         img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          //         id : 2
          //     },
          //     {
          //         price : 9999,
          //         title : 'Laptop',
          //         qty : 4,
          //         img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
          //         id : 3
          //     },
          // ]
      }
      //Another way
      //this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();

    this.db = firebase.firestore();
  }

  componentDidMount(){
    // //Using chaining of methods
    // firebase
    // .firestore()
    // //Will return refernce to a collection
    // .collection('products')
    // //will execute query and return results as QueryShot
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);

    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //   });
    //   const products = snapshot.docs.map((doc) => {
    //     //It will return an object
    //     //return doc.data();
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products : products,
    //     loading : false
    //   })
    // }) 
    //Using chaining of methods
   this.db
    //Will return refernce to a collection
    .collection('products')
    //Query to get product where price is 300
    //.where('price','==',300)
    //To group queries
    //.where('title','==','Mug')
    //To sort data according to price
    //.orderBy('price','desc')
    //Attaching listener
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        //It will return an object
        //Filling product array
        //return doc.data();
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products : products,
        loading : false
      })
    }) 
  }

  //we will create a function and sent it as props and whenever qty will
  //change that func would be called and change state in cart component
  handleIncreaseQuantity = (product) => {
      //console.log('Hey plz increase quantity of', product);
      const {products} = this.state;
      //We need to get index of that product as we will change qty of that product only
      const index = products.indexOf(product);
      // products[index].qty += 1;

      // this.setState({
      //     products : products
      //     //we can also just write products
      // })

      //Now we will increase qty in firebase that will  
      //trigger listner onSnapshot and update the app.
      //Will give refernce of that particular product
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
      //Will update data and return an promise
      .update({
        qty : products[index].qty + 1
      })
      .then(() => {
        console.log('Document updated successfully');
      })
      .catch((err) => {
        console.log('Error',err);
      })
  }

  handleDecreaseQuantity = (product) => {
      //console.log('Hey plz decrease quantity of', product);
      const {products} = this.state;
      //We need to get index of that product as we will change qty of that product only
      const index = products.indexOf(product);
      // products[index].qty -= 1;

      // this.setState({
      //     products : products
      //     //we can also just write products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
      //Will update data and return an promise
      .update({
        qty : products[index].qty - 1
      })
      .then(() => {
        console.log('Document updated successfully');
      })
      .catch((err) => {
        console.log('Error',err);
      })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;
      //It will return an other array that will contain 
      //whose id is not equal to given id
      // const items = products.filter((item) => item.id !== id );
      // this.setState({
      //     products : items,
      // })

      //We will get document refernce & delete that
      const docRef = this.db.collection('products').doc(id);

      docRef
      //Will delete product and return an promise
      .delete()
      .then(() => {
        console.log("Product deleted successfully");
      })
      .catch((err) => {
        console.log("Error",err);
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
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  }

  addProduct = () => {
    this.db
    .collection('products')
    //It will return an promise
    .add({
      img : '',
      price : '900',
      qty : 3,
      title : 'Washing Machine'
    })
    .then((docRef) => {
      console.log("Product has been added", docRef);
    })
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar 
          count = {this.getCartCount()}
        />
        {/* <button onClick = {this.addProduct} style = {{padding : 8, fontSize : 15}}>Add a product</button> */}
        <Cart 
         products = {products}  
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style = {{padding : 10, fontSize : 20}}>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}
export default App;