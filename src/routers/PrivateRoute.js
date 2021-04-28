import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({

    isAuthnticated,
    component: Component,
    ...rest

}) => {


    return (

        <Route { ...rest }  
            component={ (props) =>(

                ( isAuthnticated )
                ? ( <Component { ...props} /> )
                : ( <Redirect to="/auth/login" />)
            )
            }
        
        />

    )
}

PrivateRoute.propTypes = {
    isAuthnticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}