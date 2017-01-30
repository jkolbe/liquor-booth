import React, {Component} from 'react';
import $ from 'jquery';

import Product from '../../components/product/product-item';

export default class ProductItem extends Component {
	

	ACCESS_KEY = 'MDo2NWI0NTY4Yy1kZjEzLTExZTYtOTk3Zi1hN2E3NTQ5NzNlMzY6M0FZV1NWRWNOa1VsNU5jalJ2eURuUHBwbzBxWlNHOWxGalhC';
	BASE_URL = 'https://lcboapi.com/products/';

	constructor(props) {
		super();

		this.state = {
			id: props.params.productId,
			product: {}
		};	
	}


	getProduct() {
		$.get(`${this.BASE_URL}${this.state.id}?access_key=${this.ACCESS_KEY}`).then(
			(res) => {this.setState({
				product : res.result
			})}
		);
	}

	componentDidMount() {
		this.getProduct();
	}

	render() {
		return (
			<div className="container">
				<Product product={this.state.product}/>
			</div>
		)
	}
}