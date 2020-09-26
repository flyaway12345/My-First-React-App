import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Component/HelloWorld'
function App() {
  return (
    //returns props.name in App.js
    <div>
      <HelloWorld name="Evan"/>
    </div>
  );
}

export default App;
