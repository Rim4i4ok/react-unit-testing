import React, { Component } from 'react';
import './App.css';

interface State {
  /**
   * Count number
   */
  counter: Number
}

class App extends Component<{}, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment button</button>
      </div>
    );
  }
}

export default App;
