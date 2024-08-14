// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
