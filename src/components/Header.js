import React, { Component } from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

import Container from '@mui/material/Container'
import Navbar from './NavBar';

 function Header(props) {
  
        return (
            <div>
<Navbar/>
<Button color="secondary" onClick={() => { props.show() }}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        CART({props.cart.length})</Button>

            </div>
        )
    
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
