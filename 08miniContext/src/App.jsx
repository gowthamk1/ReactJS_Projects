import './App.css'
import React from 'react';
import UserContextProvider from './Context/userContextProvider'; 
import Profile from './Components/Profile';
import Login from './Components/Login';

function App() {
  
    return (
        <UserContextProvider> 
            <Login />
            <Profile />
        </UserContextProvider>
    );
}

export default App;