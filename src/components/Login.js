import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialData = {
    username: '',
    password: '',
}

const Login = (props) => {
    let navigate = useNavigate();

    console.log(props);
    const [credentials, setCredentials] = useState(initialData);

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                return navigate('/friends');
                // props.handleToggleLoggedIn();
            })
            .catch(err => console.log(err.response.data.error));
    }

    return(
        <section id='login-wrapper'>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
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
                        type='password'
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