import React from 'react';

// creating class based component here
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
    }
    render(){
        // Using object destructuring
        const {price, title,qty} = this.state;
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
                        <img alt = "increase" className = "action-icons" src = "https://www.flaticon.com/premium-icon/icons/svg/2985/2985071.svg" />
                        <img alt = "decrease" className = "action-icons" src = "https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" />
                        <img alt = "delete" className = "action-icons" src = "https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg" />
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