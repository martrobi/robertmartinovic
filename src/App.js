import React from 'react'
import './App.css'
import {Header, Navbar} from './components';
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>

    </div>
  )
}

export default App