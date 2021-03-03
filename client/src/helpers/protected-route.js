import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from "../constants/routes";

 const ProtectedRoute=({ user, children, path, ...rest}) =>{
    if(user){
        return <Route {...rest} path={path}>
            {children}
        </Route>
    }
    return <Redirect to= {{path: ROUTES.LOGIN_PAGE}}/>

  }

   export default  ProtectedRoute;