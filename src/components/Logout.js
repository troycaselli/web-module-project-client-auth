import React from 'react';
import styled from 'styled-components';

const LogoutNotice = styled.p`
    font-size: 2.5rem;
    margin-top: 10%;
`

const Logout = () => {
    return (<LogoutNotice>You've Successfully Logged Out</LogoutNotice>)
}

export default Logout;