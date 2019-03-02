import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';
import ProductForm from './ProductForm';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			productList: [
				{name: "Android", price: 101},
				{name: "Apple", price: 123},
				{name: "Nokia", price: 69}
			]
		};
	}

	showProduct: function = (name) => {
		alert("You selected " + name);
	}

	calculateTotal: function = (price) => {
		this.setState({total: this.state.total + price});
		//alert(this.state.total);
	}

	render() {
		var component = this;
		var products = this.state.productList.map(function(product) {
			return (
				<Product name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal}/>
			);
		});

		return (
			<div>
				<ProductForm />
				{products}
				<Total total={this.state.total}/>
			</div>
		);
	}
}

export default ProductList;