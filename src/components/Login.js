import React, {useState} from 'react';

const initialData = {
    username: '',
    password: '',
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialData);

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return(
        <section id='login-wrapper'>
            <h1>LOGIN</h1>
            <form>
            <div className='input-wrapper'>
                <p>USERNAME</p>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                ></input>
            </div>
            <div className='input-wrapper'>
                <p>PASSWORD</p>
                <input 
                    type='text'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                ></input>
            </div>
            <button type='submit'>SUBMIT</button>
            </form>
        </section>
    )
}

export default Login;