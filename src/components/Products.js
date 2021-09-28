import * as React from 'react';

import {connect} from 'react-redux';
import {getItems, changeBasketItems } from '../store/actions/action';
import { addItemsToCart } from '../store/actions/action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    
    
  }));



const Products = props => {
    // const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    function handleAdding(element) {
      props.addItemsToCart(element);
      props.changeBasketItems(element);
      props.getItems(props.category.name);
  }

    

        return (
            <>

            
  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>

            {props.products.activeProducts.map((element) => {   
                return <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={element.name}
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={element.image}
                alt={element.name}
              />
              <CardContent>
              <Typography variant="body2" color="textPrimary" component="h3" >
                                Items In Stock: ({element.inStock})
                            </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.description}
                </Typography>
                
              </CardContent>
              
              <CardActions disableSpacing>
              <Button size="small" color="primary" onClick={() => { handleAdding(element) }}>
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                            Add To Cart
                        </Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                  {element.description}
                  </Typography>
             
                </CardContent>
              </Collapse>
            </Card>
            
                        })} </Grid>   </Grid>  
</>
          );    
        
        };


function mapStateToProps(state) {
  return {
      category: state.categories.activeCategory,
      products: state.products,
      cartProducts: state.cart
  };
}

const mapDispatchToProps = { getItems, addItemsToCart, changeBasketItems};

export default connect(mapStateToProps, mapDispatchToProps)(Products);