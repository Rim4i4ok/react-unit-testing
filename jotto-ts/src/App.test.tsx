import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {ane} state - Initial state for setup.
 * @return {ShallowWrapper}
 */
const setup = (props = {}, state = null): ShallowWrapper => {
  return shallow(<App {...props} />);
}

/**
 * Return ShalloWrapper container node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper: ShallowWrapper, val: String): ShallowWrapper => {
  return wrapper.find(`[data-test='${val}']`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders count display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {});

test('clicking button increment counter disaply', () => {});
