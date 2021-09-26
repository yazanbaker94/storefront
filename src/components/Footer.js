import React, { Component } from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export class Footer extends Component {
    render() {
        return (
            <div>
                   <Typography variant="h4" component="h2">
  Contact : Yazan Baker, +962791852355<br>
  </br>
  &copy; 2021 Yazan's Store
</Typography>
            </div>
        )
    }
}

export default Footer
