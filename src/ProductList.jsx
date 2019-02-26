import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';

class ProductList extends Component {
	render() {
		return (
			<div>
				<Product name="Android" price="101"/>
				<Product name="Apple" price="123"/>
				<Product name="Nokia" price="69"/>
				<Total/>
			</div>
		);
	}
}

export default ProductList;