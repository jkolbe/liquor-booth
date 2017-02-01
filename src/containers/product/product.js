import React, {Component} from 'react';
import $ from 'jquery';

import RaisedButton from 'material-ui/RaisedButton';
import IconRight from 'material-ui/svg-icons/navigation/chevron-right';
import IconLeft from 'material-ui/svg-icons/navigation/chevron-left';

//import {ACCESS_KEY} from '../../constants/api-url.js'

import ProductList from '../../components/product/product-list';

export default class Product extends Component {

	ACCESS_KEY = 'MDo2NWI0NTY4Yy1kZjEzLTExZTYtOTk3Zi1hN2E3NTQ5NzNlMzY6M0FZV1NWRWNOa1VsNU5jalJ2eURuUHBwbzBxWlNHOWxGalhC';
	BASE_URL = 'https://lcboapi.com';
	API_URL = '/products?access_key='+this.ACCESS_KEY;

	constructor() {
		super();

		this.state = {
			products: [],
			is_first_page: true,
			is_final_page: false,
			next_page_path: "",
			previous_page_path: ""
		};	
	}

	getProducts(overWriteURL) {
		$.get(overWriteURL ? this.BASE_URL+overWriteURL : this.BASE_URL+this.API_URL).then(
			(res) => { this.setState({
				products: res.result,
				is_first_page: res.pager.is_first_page,
				is_final_page: res.pager.is_final_page,
				next_page_path: res.pager.next_page_path,
				previous_page_path: res.pager.previous_page_path,
			})}
		);
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		return (
			<div className="container">
				
				<ProductList products={this.state.products} />

				<div className="nav-buttons">
					<RaisedButton
						className="nav-buttons-prev"
						onClick={()=>this.getProducts(this.state.previous_page_path)}
						disabled={this.state.is_first_page}
						label="Previous"
						secondary={true}
						icon={<IconLeft />} />

					<RaisedButton
						className="nav-buttons-next"
						onClick={()=> this.getProducts(this.state.next_page_path)}
						disabled={this.state.is_final_page}
						label="Next"
						labelPosition="before"
						secondary={true}
						icon={<IconRight />} />
				</div>

			</div>
		)
	}
}