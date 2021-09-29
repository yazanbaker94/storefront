import React, { Component } from 'react'
import Categories from './Categories'
import Products from './Products'
import { withRouter } from 'react-router'

export class ProductAndCategory extends Component {
    render() {
        return (
            <div>
              <Categories/>
              <Products/>  
            </div>
        )
    }
}

export default withRouter(ProductAndCategory)
