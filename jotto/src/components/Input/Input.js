import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
	render() {
		return (
			<div>
				<button>Hello</button>
			</div>
		);
	}
}

const mapStateToPtops = state => {
	return {};
};

export default connect(mapStateToPtops)(Input);
