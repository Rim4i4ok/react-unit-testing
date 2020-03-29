import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			showWarning: false,
		};
	}

	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">
					The counter is currently {this.state.counter}
				</h1>
				<button
					data-test="increment-button"
					onClick={() =>
						this.setState({
							counter: this.state.counter + 1,
							showWarning: false,
						})
					}
				>
					Increment counter
				</button>
				<button
					data-test="decrement-button"
					onClick={() => {
						if (this.state.counter > 0) {
							this.setState({
								counter: this.state.counter - 1,
								showWarning: false,
							});
						} else {
							this.setState({ showWarning: true });
						}
					}}
				>
					Decrement counter
				</button>
				{this.state.showWarning && (
					<p data-test="counter-warning">Do not click decrement button!</p>
				)}
			</div>
		);
	}
}

export default App;
