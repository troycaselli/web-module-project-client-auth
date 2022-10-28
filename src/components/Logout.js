import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import {axiosWithAuth} from '../util/axiosWithAuth';

const LogoutNotice = styled.p`
    font-size: 2.5rem;
    margin-top: 10%;
`

const Logout = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
        props.handleToggleLoggedIn();
        axiosWithAuth()
          .post('/logout')
              .then(() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('loggedInStatus');
                  return navigate('/login');
              })
              .catch(err => console.log(err.response.data.error));
    }, []);

    return (<LogoutNotice>{`You've Successfully Logged Out`}</LogoutNotice>)
}

export default Logout;