import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Description />
    </div>
  );
}

export default App;
