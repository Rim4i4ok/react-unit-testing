import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "./Input";

/**
 * Factory function to create a ShalloWrapper for the GuessedWords component.
 * @function setup
 * @param {object} intialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (intialState = {}) => {
	const store = storeFactory(intialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe("render", () => {
	describe("word has no been guessed", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		});

		test("renders components without error", () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});

		test("renders input box", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(1);
		});

		test("renders submit button", () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.length).toBe(1);
		});
	});

	describe("word has been guessed", () => {
		test("renders components without error", () => {});

		test("does not renders input box", () => {});

		test("doues not renders submit button", () => {});
	});
});

describe("update state", () => {});
