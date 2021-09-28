import React from 'react';
import { useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { changeSelected, getData } from '../store/actions/action';



function Categories(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData()).then(() => {
            dispatch(changeSelected("electronics"))
        })
    }, [dispatch])


    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '31%', marginTop: '1%', fontSize: '25px' }}>
                {props.categories.map((element, idx) => {

                    return <Link color="inherit" key={idx} onClick={() => { dispatch(changeSelected(element.category)) }}>
                        {element.name}
                    </Link>
                })}
            </Breadcrumbs>
            <div style={{ fontSize: '50px', marginTop: '3%', textAlign: 'center' }}>{props.activeCategory.name}</div>
            <div style={{ fontSize: '25px', marginTop: '2%', color: 'GrayText', textAlign: 'center' }}>{props.activeCategory.description}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state.categories;
}


export default connect(mapStateToProps)(Categories);