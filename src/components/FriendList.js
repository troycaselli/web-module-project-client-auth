import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../util/axiosWithAuth';

import './FriendList.css';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
                .then(res => {
                    setFriends(res.data);
                })
                .catch(err => console.log(err));
    }, []);

    return(
        <section id='friends-wrapper'>
            <h1>FRIEND LIST</h1>
            <div id='friends-list'>
                {friends.map((friend, idx) => {
                    return (
                        <div key={friend.id}>
                            <p>{`${idx + 1}) ${friend.name}`} : <i>{friend.email}</i></p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default FriendList;