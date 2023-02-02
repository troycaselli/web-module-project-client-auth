import React from 'react';
import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import {useState} from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  const [toggleLoggedIn, setToggleLoggedIn] = useState(localStorage.getItem('loggedInStatus') || false);

  const handleToggleLoggedIn = () => {
    const isLoggedIn = !toggleLoggedIn
    localStorage.setItem('loggedInStatus', isLoggedIn);
    setToggleLoggedIn(isLoggedIn);
  }

  return (
    <div className='outer-wrapper'>
      <header>
        <h2>Client Auth Project</h2>
        <nav>
          <h3>FRIENDS DATABASE</h3>
          <div id='nav-list'>
            {toggleLoggedIn ? 
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none' , color: '#eeeeee'}}
                  to='/logout'
                >
                  LOGOUT
                </Link>
              </div> :
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none', color: '#eeeeee'}} 
                  to='/login'
                >
                  LOGIN
                </Link>
              </div>
            }
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
        <Route path='/' element={toggleLoggedIn ? <Navigate to='/friends' /> : <Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
        <Route path='/login' element={toggleLoggedIn ? <Navigate to='/friends' /> : <Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/logout' element={<Logout handleToggleLoggedIn={handleToggleLoggedIn} />} />
          <Route path='/friends' element={<FriendList />} />
          <Route path='/friends/add' element={<AddFriend />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
