import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';

class ProductList extends Component {
	showProduct: function = (name) => {
		alert("You selected " + name);
	}

	render() {
		return (
			<div>
				<Product name="Android" price="101" handleShow={this.showProduct}/>
				<Product name="Apple" price="123" handleShow={this.showProduct}/>
				<Product name="Nokia" price="69" handleShow={this.showProduct}/>
				<Total/>
			</div>
		);
	}
}

export default ProductList;