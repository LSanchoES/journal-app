import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({

    isAuthnticated,
    component: Component,
    ...rest

}) => {
    return (

        <Route { ...rest }  
            component={ (props) =>(

                ( isAuthnticated )
                ? ( <Redirect to="/" />)
                : ( <Component { ...props} /> )
            )
        }
        
        />

    )
}

PublicRoute.propTypes = {
    isAuthnticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}