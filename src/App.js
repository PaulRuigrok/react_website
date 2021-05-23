import React, {useState, useEffect} from 'react'
import Navbar from './shared/Nav'
import Dropdown from './shared/Nav/Dropdown'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Discord from './Discord'

import './App.css';


function App() {
  // TOGGLE MENU
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
// HIDE MENU WHEN SCREEN IS RESIZED
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('resized the menu')
      }
    }
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
      }
    
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/discord' component={Discord} />
      </Switch>
      
    </>
  );
}

export default App;
