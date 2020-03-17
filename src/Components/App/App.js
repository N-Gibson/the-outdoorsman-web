import React from 'react';
import Trails from '../Trails/Trails';
import Campgrounds from '../Campgrounds/Campgrounds';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/trails' render={() =>  <Trails />}/>
      <Route exact path='/campgrounds' render={() => <Campgrounds />}/>
    </div>
  );
}

export default App;
