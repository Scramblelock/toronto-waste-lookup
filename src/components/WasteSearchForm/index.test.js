import { shallow } from 'enzyme';
import React from 'react';
import WasteSearchForm from './index';

it('expect to render WasteSearchForm component', () => {
	expect(shallow(<WasteSearchForm />).length).toEqual(1);
})

it('expect it to render WasteSearchForm component', () => {
	expect(shallow(<WasteSearchForm />)).toMatchSnapshot();
})
