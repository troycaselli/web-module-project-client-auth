import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import schema from '../validation/formSchema';
import { axiosWithAuth } from '../util/axiosWithAuth';
import './AddFriend.css';

const initialFormValues = {
    name: '',
    email: '',
}

const initialErrorValues = {
    name: '',
    email: ''
}

const AddFriend = () => {
    let navigate = useNavigate();
    const [newFriend, setNewFriend] = useState(initialFormValues);
    const [errorValues, setErrorValues] = useState(initialErrorValues);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
                .then(res => {
                    console.log(res);
                    return navigate('/friends');
                })
                .catch(err => console.log(err.response.data.error));
    }

    useEffect(() => {
        schema.isValid(newFriend).then(valid => setDisabled(!valid))
    }, [newFriend])

    const handleChange = (e) => {
        const {name, value} = e.target;
        validate(name, value);
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    }

    const validate = (name, valueToUse) => {
        yup.reach(schema, name)
            .validate(valueToUse)
            .then(() => setErrorValues({...errorValues, [name]: ''}))
            .catch(err => setErrorValues({...errorValues, [name]: err.errors[0]}))
    }

    return (
        <section id='add-friend-wrapper'>
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <p>*FRIEND NAME</p>
                    <input 
                        type='text'
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='input-wrapper'>
                    <p>*FRIEND EMAIL</p>
                    <input 
                        type='text'
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                    ></input>
                </div>
                <button 
                    className={disabled ? 'disabled' : ''} 
                    type='submit' 
                    disabled={disabled}
                >SUBMIT</button>
            </form>
        </section>
    )
}

export default AddFriend;