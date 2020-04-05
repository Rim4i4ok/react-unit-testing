import React from 'react';
import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently</h1>
      <button data-test="increment-button">Increment button</button>
    </div>
  );
}

export default App;
