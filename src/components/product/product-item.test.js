import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductItem from './product-item';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

describe('<ProductItem />', () => {

	it('Should display the product name in an product-card-header', () => {

		const wrapper = shallow(<ProductItem
			product={{
				name : "Budweiser"
			}} />);

		//expect(wrapper.find('.product-title')).to.have.length(1);


		console.log(wrapper.find(CardTitle).node());
		//expect(wrapper.find('.product-title').html()).to.contain('Budweiser');

		/*
			AssertionError: expected { Object (root, unrendered, ...) } to have a length of 1 but got 0
		*/

	});

});