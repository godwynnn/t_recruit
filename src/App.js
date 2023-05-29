import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Root } from './context/root';

function App({children}) {
  return (
    <React.Fragment>

        <Root/>
        
    </React.Fragment>
  );
}

export default App;
