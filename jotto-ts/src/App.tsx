import React, { Component } from 'react';
import './App.css';

export interface State {
  /**
   * Count number
   */
  counter: number
}

class App extends Component<{}, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button 
          data-test="increment-button"
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1
            })
          }}>Increment button</button>
      </div>
    );
  }
}

export default App;
