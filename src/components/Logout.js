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
    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        props.handleToggleLoggedIn();
        axiosWithAuth()
          .post('/logout')
              .then(async () => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('loggedInStatus');
                  await delay(2000)
                  return navigate('/login');
              })
              .catch(err => console.log(err.response.data.error));
    }, []);

    return (
        <LogoutNotice>
            <h2>{`You've Successfully Logged Out`}</h2>
            <p><i>...Redirecting to Login Page...</i></p>
        </LogoutNotice>
    )
}

export default Logout;