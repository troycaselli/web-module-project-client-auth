import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='outer-wrapper'>
      <header>
        <h2>Client Auth Project</h2>
        <nav>
          <h3>FRIENDS DATABASE</h3>
          <div id='nav-list'>
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
            <div className='nav-item'>
              <Link 
                style={{textDecoration: 'none' , color: '#eeeeee'}}
                 to='/logout'
              >
                LOGOUT
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={} />
        <Route path='/' />
      </Routes>
    </div>
  );
}

export default App;
