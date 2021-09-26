import {connect} from 'react-redux';
import {changeSelected} from '../store/categories';
import {getItems} from '../store/products';
import Button from '@material-ui/core/Button';


const Categories = props => {
    return (
       <>
            {props.categories.map(element => {
              return <Button color="inherit" onClick={() => { props.changeSelected(element.name) }}>
               {element.name}
             </Button>   })}
         
           <div>{props.activeCategory.name}</div>
           <div>{props.activeCategory.description}</div>

             </>
    )
}

const mapStateToProps = (state) => {
    return state.categories
};

const mapDispatchToProps = {changeSelected, getItems};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);