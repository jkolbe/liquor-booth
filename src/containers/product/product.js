import React, {Component} from 'react';
import $ from 'jquery';

import ProductList from '../../components/product/product-list';

export default class Product extends Component {

	ACCESS_KEY = 'MDo2NWI0NTY4Yy1kZjEzLTExZTYtOTk3Zi1hN2E3NTQ5NzNlMzY6M0FZV1NWRWNOa1VsNU5jalJ2eURuUHBwbzBxWlNHOWxGalhC';
	API_URL = 'https://lcboapi.com/products?access_key='+this.ACCESS_KEY;

	constructor() {
		super();

		this.state = {
			products: []
		};		
	}

	getProducts(overWriteURL) {
		$.get(overWriteURL ? overWriteURL : this.API_URL).then(
			(res) => { this.setState({
				products: res.result
				})
				console.log(res);
			}
		);
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		return (
			<div className="container">
				<ProductList products={this.state.products} />
			</div>

		)
	}

}