import React, {Component} from 'react';
import $ from 'jquery';

import TextField from 'material-ui/TextField';

import ProductList from '../../components/product/product-list';

export default class Home extends Component {


	ACCESS_KEY = 'MDo2NWI0NTY4Yy1kZjEzLTExZTYtOTk3Zi1hN2E3NTQ5NzNlMzY6M0FZV1NWRWNOa1VsNU5jalJ2eURuUHBwbzBxWlNHOWxGalhC';
	SEARCH_URL = 'https://lcboapi.com/products?access_key='+this.ACCESS_KEY+'&q=';

	constructor() {
		super();

		this.state = {
			products: []
		};	

		this.handleSearch = this.handleSearch.bind(this);
	}


	handleSearch(event) {
		const q = encodeURIComponent(event.target.value);
		$.get(this.SEARCH_URL+q).then(
			(res) => { this.setState({
				products: res.result,
			})}
		);
	}

	render() {
		return (
			<div className="container">
				<h1>Welcome to Liquor Booth</h1>
				<p>Please visit our products page or search for a specific product...</p>

				<TextField
					style={{marginBottom: '20px'}}
					hintText="Enter any product info"
					floatingLabelText="Search"
					onChange={this.handleSearch}
				/>

				<ProductList products={this.state.products} />

			</div>
		)
	}

}