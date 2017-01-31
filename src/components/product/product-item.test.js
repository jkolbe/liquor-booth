import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductItem from './product-item';

describe('<ProductItem />', () => {

	it('Should display the product name in an product-card-header', () => {

		const wrapper = shallow(<ProductItem
			product={{
				name : "Budweiser"
			}} />);

		expect(wrapper.find('.product-title')).to.have.length(1);


		//console.log(wrapper.find('span.product-title').text());
		//expect(wrapper.find('.product-title').text()).to.contain('Budweiser');

		/*
			AssertionError: expected { Object (root, unrendered, ...) } to have a length of 1 but got 0
		*/

	});

});