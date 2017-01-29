import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Nav from '../containers/navigation/navigation';
import Home from '../containers/home/home';
import Products from '../containers/product/product';
import Product from '../components/product/product-item';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="" component={Nav}>
			<Route path="/" component={Home}/>
			<Route path="/product" component={Products} />
			<Route path="/product/:productId" component={Product}/>
		</Route>
	</Router>
);
export default Routes;

//this.props.params.productId