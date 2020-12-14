import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component.jsx'

const Hats = () => (
  <div>HATS</div>
)
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={Hats} />
    </div>
    
  );
}


export default App;
