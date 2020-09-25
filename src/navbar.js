import React from 'react';

//We can make Navbar component a function component. 
//function component will not need render() function
//class Navbar extends React.Component{
  const Navbar = (props) => {     
        return(
            <div style = {styles.nav}>
                <div style = {styles.cartIconContainer}>
                    <img style = {styles.cartIcon} src = "https://www.flaticon.com/premium-icon/icons/svg/2042/2042549.svg" alt = "" />
                    <span style = {styles.cartCount}>3</span>
                </div>
            </div>
        );
    }


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }   
  };
  

export default Navbar;