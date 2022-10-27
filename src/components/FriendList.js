import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../util/axiosWithAuth';

import './FriendList.css';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get('http://localhost:9000/api/friends')
                .then(res => {
                    console.log(res.data);
                    setFriends(res.data);
                })
                .catch(err => console.log(err));
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <section id='friends-wrapper'>
            <h1>FRIEND LIST</h1>
            <div id='friends-list'>
                {friends.map((friend) => {
                    return (
                        <p key={friend.id}>{`- ${friend.name} - ${friend.email}`}</p>
                    )
                })}
            </div>
        </section>
    );
}

export default FriendList;