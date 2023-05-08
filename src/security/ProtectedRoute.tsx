import React from 'react'
// react router dom v6
import { Navigate } from 'react-router-dom';
// types
import { ProtectedRoutePropsType } from '../Types/CustomTypes'

const ProtectedRoute: React.FC <ProtectedRoutePropsType> = ({athenticated , redirectTo , children}) => {
    if (!athenticated) {
        return <Navigate to = {redirectTo}/>
    }
    else {
        return children as any;
    } 
}

export default ProtectedRoute;