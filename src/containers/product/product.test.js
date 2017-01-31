import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProductList from './product';
import sinon from 'sinon';

describe('<ProductList />', () => {
	
	it('should fire getProducts when the next page button is clicked', () => {
		const wrapper = shallow(<ProductList />);
		const spy = sinon.spy(wrapper.instance(), "getProducts");
		wrapper.setState({next_page_path: 'foo'});
		wrapper.update();
		wrapper.find('.nav-buttons-next').simulate('click');
		expect(spy.calledOnce).to.equal(true);
	});

	it('should fire getProducts when the previous page button is clicked', () => {
		const wrapper = shallow(<ProductList />);
		const spy = sinon.spy(wrapper.instance(), "getProducts");
		wrapper.setState({previous_page_path: 'foo'});
		wrapper.update();
		wrapper.find('.nav-buttons-prev').simulate('click');
		expect(spy.calledOnce).to.equal(true);
	});

	it('should fire getProducts with the current next_page_path', () => {
		const wrapper = shallow(<ProductList />);
		const spy = sinon.spy(wrapper.instance(), "getProducts");
		wrapper.setState({next_page_path: 'foo'});
		wrapper.update();
		wrapper.find('.nav-buttons-next').simulate('click');
		expect(spy.calledWith('foo')).to.equal(true);
	});

	it('should fire getProducts with the current previous_page_path', () => {
		const wrapper = shallow(<ProductList />);
		const spy = sinon.spy(wrapper.instance(), "getProducts");
		wrapper.setState({previous_page_path: 'foo'});
		wrapper.update();
		wrapper.find('.nav-buttons-prev').simulate('click');
		expect(spy.calledWith('foo')).to.equal(true);
	});



})
