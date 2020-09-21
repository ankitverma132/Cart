import React from 'react';

//creating class based component here
//While creating class based you need to use render() function

class CartItem extends React.Component{
    // Adding state to a component
    constructor(){
        super();
       this.state = {
            price : 999,
            title : 'Mobile phone',
            qty : 1,
            img : ''
        }
        //Another way
        //this.increaseQuantity = this.increaseQuantity.bind(this);
       // this.testing();
    }

    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    //     promise.then(() => {
    //         //setState fun act as synchronous call inside promise
    //         //this.setState({qty : 100});
    //         //to test batching
    //         this.setState({qty : this.state.qty+10});
    //         this.setState({qty : this.state.qty+10});
    //         this.setState({qty : this.state.qty+10});
    //         //we will get update state here as inside
    //         //promise setState fun is synchronous
    //         console.log('state', this.state);
    //     });
    // }

    // increaseQuantity(){
    //     //console.log('Test');
    //     // It will throw an error because this is undefined here
    //     //console.log('this',this);
    //     console.log('this.state', this.state);
    // }
    //Another way using arrow function
    //It will bind value of this to instant of CartItem
    increaseQuantity = () =>{
        //console.log('Test');
        // It will throw an error because this is undefined here
        //console.log('this.state',this.state);
        //console.log('this.state', this.state);
        //It will update state but would not trigger UI update
        //this.state.qty += 1;

        //setState form-1
        // this.setState({
        //     qty : this.state.qty + 1
        // })
        //setState form-2 (If previousState require you should use form-2)
        this.setState((prevState) => {
            return{
                qty : prevState.qty + 1
            }
        // },() => {
        //     //we can pass this second callback function in case of performing some
        //     //action after setState() has executed as setState is async function  
        //     console.log('this.state',this.state);
        });
    }
    decreaseQuantity = () =>{
        //Putting a check that if qty is 0
        //don't decrease it
        //Using destructuring
        const {qty} = this.state;
        if(qty == 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty : prevState.qty - 1
            }
        });
    }
    render(){
        console.log("render");
        // Using object destructuring
        const {price, title, qty} = this.state;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image} />
                </div>
                <div className = "right-block">
                    <div style = {{fontSize : 25}}>{title}</div>
                    <div style = {{color : '#777'}}>Rs {price}</div>
                    <div style = {{color : '#777'}}>Qty: {qty}</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        {/* Use image from flaticon.com */}
                        <img alt = "increase" className = "action-icons"
                         src = "https://www.flaticon.com/premium-icon/icons/svg/2985/2985071.svg"
                        //onClick = {this.increaseQuantity.bind(this)}
                        onClick = {this.increaseQuantity}
                        />
                        <img alt = "decrease" className = "action-icons" 
                        src = "https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                        onClick = {this.decreaseQuantity}
                        />
                        <img alt = "delete" className = "action-icons" 
                        src = "https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;