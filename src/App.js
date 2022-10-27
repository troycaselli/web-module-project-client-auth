import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import { axiosWithAuth } from './util/axiosWithAuth';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  let navigate = useNavigate();
  const [toggleLoggedIn, setToggleLoggedIn] = useState(false);

  const handleToggleLoggedIn = () => {
    setToggleLoggedIn(toggleLoggedIn);
  }
  
  const handleLogout = () => {
    setToggleLoggedIn(false);
    axiosWithAuth()
      .post('http://localhost:9000/api/logout')
          .then(res => {
              localStorage.removeItem('token');
              return navigate('/login');
          })
          .catch(err => console.log(err.response.data.error));
  }

  return (
    <div className='outer-wrapper'>
      <header>
        <h2>Client Auth Project</h2>
        <nav>
          <h3>FRIENDS DATABASE</h3>
          <div id='nav-list'>
            {/* {!toggleLoggedIn ? */}
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none', color: '#eeeeee'}} 
                  to='/login'
                >
                  LOGIN
                </Link>
              </div>
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none' , color: '#eeeeee'}}
                  to='/logout'
                  onClick={handleLogout}
                >
                  LOGOUT
                </Link>
              </div>
            {/* } */}
            <div className='nav-item'>
              <Link 
                style={{textDecoration: 'none' , color: '#eeeeee'}}
                 to='/friends'
              >
                FRIENDLIST
              </Link>
            </div>
            <div className='nav-item'>
              <Link 
                style={{textDecoration: 'none' , color: '#eeeeee'}}
                 to='/friends/add'
              >
                ADDFRIEND
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
        <Route path='/login' element={<Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/friends' element={<FriendList />} />
        <Route path='/friends/add' element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
