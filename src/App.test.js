import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exportAllDeclaration } from '@babel/types';


Enzyme.configure({adapter: new EnzymeAdapter()})


test('renders without an error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});
test('clicking button increments counter display', () => {

});