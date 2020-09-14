import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './coding_1/HomePage';
// import { LoginContext } from './coding_1/LoginFormProvider'
import DashBoard from './coding_1/DashBoard';
import LoginForm from './coding_1/LoginForm';

function App() {
  return (
    
    <div className="App">
      <HomePage />
      <LoginForm />  
    </div>
      
  );
}


export default App;
