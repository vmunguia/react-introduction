import React, { Component } from 'react';

class ProductForm extends Component {
	submit: function = (e) => {
		e.preventDefault();
		alert('Name: ' + this.refs.name.value + ' - Price: $' + this.refs.price.value);

		this.refs.name.value = "";
		this.refs.price.value = "";
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<br/>
				Name: <input type="text" placeholder="Product Name" ref="name" /> - Price: $
				<input type="text" placeholder="Product Price" ref="price" />
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button>Create Product</button>
				<br/>
				<br/>
				<hr/>
			</form>
		);
	}
}

export default ProductForm;