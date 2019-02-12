import React, { Component } from 'react';

class Product extends Component {
	buy: function = () => {
		alert("You bought an Android mobile.");
	}

	render() {
		return (
			<div>
				<p>Android - $199</p>
				<button onClick={this.buy}>Buy</button>
			</div>
		);
	}
}

export default Product;
