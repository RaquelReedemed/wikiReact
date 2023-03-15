//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Carouseleq from './components/carouseleq'
import Navbareq from './components/navbareq'
import Search from './components/search'

import './css/style.css'



function App() {
  return (
    <div>
       <Navbareq></Navbareq>
       <Search></Search>
       <Carouseleq></Carouseleq>
    </div>
  )
}
export default App






/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raquel
        </a>
      </header>
    </div>
  );
}

export default App; */
