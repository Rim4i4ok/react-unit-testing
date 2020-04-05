import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders count display', () => {});

test('counter starts at 0', () => {});

test('clicking button increment counter disaply', () => {});
