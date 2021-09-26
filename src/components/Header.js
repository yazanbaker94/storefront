import React, { Component } from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container'
import Navbar from './NavBar';

export class Header extends Component {
    render() {
        return (
            <div>
<Navbar/>

            </div>
        )
    }
}

export default Header
