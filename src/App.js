import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Grid from './components/Blog-Grid/Grid';
import Header from './components/Header/Header';
import SideGrid from './components/Side-Grid/SideGrid';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className='container'>
        <div className='row'>
        <Grid />
        <SideGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
