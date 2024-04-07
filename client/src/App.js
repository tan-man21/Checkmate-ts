import React, { Fragment } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Description from './components/Description';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checklist from './components/Checklist';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={
              <Fragment>
                <Navigation />
                <Hero />
                <Description />
              </Fragment>
            } />
            <Route path='/tasks' element={<Checklist />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
