import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
     const {user, loading} = useContext(AuthContext)
     const location = useLocation();

     if(loading){
          return <div className='text-center'><Spinner animation="grow" size="sm" />
          <Spinner animation="grow" /></div>
     }
     
     if(!user){
          return <Navigate to='/singin' state={{ from: location }} replace></Navigate>
     }else{
          return children;
     }
};

export default PrivateRoutes;