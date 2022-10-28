import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  const [toggleLoggedIn, setToggleLoggedIn] = useState(localStorage.getItem('loggedInStatus') || false);
  console.log(toggleLoggedIn);

  // useEffect(() => {
  //   const storedValue = localStorage.getItem('loggedInStatus');
  //   setToggleLoggedIn(storedValue);
  // }, []);

  const handleToggleLoggedIn = () => {
    setToggleLoggedIn(!toggleLoggedIn);
    localStorage.setItem('loggedInStatus', toggleLoggedIn);
  }

  return (
    <div className='outer-wrapper'>
      <header>
        <h2>Client Auth Project</h2>
        <nav>
          <h3>FRIENDS DATABASE</h3>
          <div id='nav-list'>
            {!toggleLoggedIn &&
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none', color: '#eeeeee'}} 
                  to='/login'
                >
                  LOGIN
                </Link>
              </div>
            }
            {toggleLoggedIn &&
              <div className='nav-item'>
                <Link 
                  style={{textDecoration: 'none' , color: '#eeeeee'}}
                  to='/logout'
                >
                  LOGOUT
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
        <Route path='/' element={toggleLoggedIn ? <FriendList /> : <Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
        <Route path='/login' element={<Login handleToggleLoggedIn={handleToggleLoggedIn} />} />
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
