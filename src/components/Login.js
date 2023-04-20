import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';

const initialData = {
    username: '',
    password: '',
}

const Login = (props) => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState(initialData);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                setError('');
                localStorage.setItem('token', res.data.token);
                props.handleToggleLoggedIn();
                return navigate('/friends');
            })
            .catch(err => {
                console.log(err.response.data.error);
                setError(err.response.data.error);
            });
    }

    return(
        <section id='login-wrapper'>
            <h1>LOGIN</h1>
            <p id='error'>{error}</p>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <p>USERNAME</p>
                    <input 
                        type='text'
                        name='username'
                        value={credentials.username}
                        placeholder='Bloom'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='input-wrapper'>
                    <p>PASSWORD</p>
                    <input 
                        type='password'
                        name='password'
                        value={credentials.password}
                        placeholder='Tech'
                        onChange={handleChange}
                    ></input>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </section>
    )
}

export default Login;