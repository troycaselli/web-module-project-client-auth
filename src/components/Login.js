import React from 'react';

const Login = () => {
    return(
        <section id='login-wrapper'>
            <h1>LOGIN</h1>
            <form>
            <div className='input-wrapper'>
                <p>USERNAME</p>
                <input type='text'></input>
            </div>
            <div className='input-wrapper'>
                <p>PASSWORD</p>
                <input type='text'></input>
            </div>
            <button type='submit'>SUBMIT</button>
            </form>
        </section>
    )
}

export default Login;