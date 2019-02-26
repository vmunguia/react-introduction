import React, { Component } from 'react';

class Total extends Component {
	render() {
		return (
			<div>
				<h3>Total cash: ${this.props.total}</h3>
			</div>
		);
	}
}

export default Total;