import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';

class ProductList extends Component {
	render() {
		return (
			<div>
				<Product/>
				<Product/>
				<Product/>
				<Total/>
			</div>
		);
	}
}

export default ProductList;