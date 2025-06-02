import react from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherOneComponent from './containers/anotherOneComponent';
import ClassComponent from './containers/classComponent';
import Writers from './containers/Writers';
import Form from './containers/Form';

import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NavMenu from './components/NavMenu';

function App(props) {
  const someFunc = (value) => {
    alert(value)
  }

  const someFunc1 = (value) => {
    console.log(value)
  }
  
  return (
    <div>
      <Router>
        <div>
          <NavMenu />
          <Routes>
            <Route exact path="/" Component={AnotherOneComponent} />
            <Route path="/about" Component={Writers} />
            <Route path="/test" Component={TestComponent} />
            {/* <Route component={CurrentTime} /> */}
          </Routes>
          {/* <AnotherOneComponent/> */}
        </div>
      </Router> 
    </div>
    
  );
}

export default App;
