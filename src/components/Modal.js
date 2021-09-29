import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addItemsToCart } from '../store/actions/action';

// card
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//
import {connect} from 'react-redux';
import {getItems, changeBasketItems } from '../store/actions/action';


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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleAdding(element) {
    props.addItemsToCart(element);
    props.changeBasketItems(element);
    props.getItems(props.category.name);
}

const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <div>
        {props.products.activeProducts.map((element) =>  {
            return <>
            <Button onClick={handleOpen}>View Details</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                <Card sx={{ maxWidth: 345 }}>
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
                        <Modal/>
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
                </Box>
              </Fade>
            </Modal>
            </>
        })}
      
    </div>
  );
}

function mapStateToProps(state) {
    return {
        category: state.categories.activeCategory,
        products: state.products,
        cartProducts: state.cart
    };
  }
  
  const mapDispatchToProps = { getItems, addItemsToCart, changeBasketItems};
  
  export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal);