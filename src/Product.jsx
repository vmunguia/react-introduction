import React, { Component } from 'react';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {qty: 0};
	}
	
	buy: function = () => {
		this.setState({qty: this.state.qty + 1});
		//alert("You bought an Android mobile.");
	}

	render() {
		return (
			<div>
				<p>Android - $199</p>
				<button onClick={this.buy}>Buy</button>
				<h3>Qty: {this.state.qty} item(s)</h3>
			</div>
		);
	}
}

export default Product;
