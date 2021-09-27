import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

function SimpleCart(props) {
    const classes = useStyles();

    function handleList() {
        let basket = [];

        props.cart.forEach((element) => {
            if (basket.includes(element)) {
                basket.forEach(item => {
                    if (element.name === item.name) {
                        item.inCart += 1;
                    }
                })
            } else {
                element.inCart = 1;
                basket.push(element)
            }
        });

        let list = basket.map((element, idx) => {
            return (<ListItem key={idx} button>
                <ListItemText primary={`${element.name} / #of items: ${element.inCart}`} />
            </ListItem>)
        })
        return list;
    }

    return (
        <div className={classes.root}>
            <List component="nav" style={{ position: 'absolute', right: '1%' }}>
                {handleList()}
            </List>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(SimpleCart);