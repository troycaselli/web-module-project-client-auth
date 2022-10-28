import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from '../util/axiosWithAuth';
import './AddFriend.css';

const initialData = {
    name: '',
    email: '',
}

const AddFriend = () => {
    let navigate = useNavigate();
    const [newFriend, setNewFriend] = useState(initialData);

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
    console.log(newFriend);

    const handleChange = (e) => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    }

    return (
        <section id='add-friend-wrapper'>
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <p>FRIEND NAME</p>
                    <input 
                        type='text'
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='input-wrapper'>
                    <p>FRIEND EMAIL</p>
                    <input 
                        type='text'
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                    ></input>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </section>
    )
}

export default AddFriend;