import React from 'react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory functoin to create a ShalloWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper: ShallowWrapper, val: string) => wrapper.find(`[data-test='${val}']`);

describe("Component", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("renders counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  test("counter start at 0", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking on button increments counter display", () => {
    const wrapper = setup();

    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate('click');

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("Decrement", () => {
  test("render decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("clicking on button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();

    const incrementButton = findByTestAttr(wrapper, "increment-button");
    incrementButton.simulate('click');

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate('click');

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

  describe("Error when counter below 0", () => {
    test("error does not show when not needed", () => {
      const wrapper = setup();
      const error = findByTestAttr(wrapper, "error-message");

      const hasHiddenClass = error.hasClass('hidden');
      expect(hasHiddenClass).toBe(true);
    });

    describe("Counter is 0 and decrement is clicked", () => {
      let wrapper: ShallowWrapper;
      beforeEach(() => {
        wrapper = setup();

        const button = findByTestAttr(wrapper, "decrement-button");
        button.simulate('click');
      })

      test("error shows", () => {
        const error = findByTestAttr(wrapper, "error-message");

        const hasHiddenClass = error.hasClass('hidden');
        expect(hasHiddenClass).toBe(false);
      })

      test("counter still 0", () => {
        const count = findByTestAttr(wrapper, "count").text();
        expect(count).toBe("0");
      })

      test("clicking increment hides error", () => {
        const button = findByTestAttr(wrapper, "increment-button");
        button.simulate('click');

        const error = findByTestAttr(wrapper, 'error-message');
        const hasHiddenClass = error.hasClass('hidden');
        expect(hasHiddenClass).toBe(true);
      })
    });
  });
});