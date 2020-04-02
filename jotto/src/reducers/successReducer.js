import { actionTypes } from "../actions";

/**
 * @function sucessReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @return {boolean} - new success state.
 */
export default (state = false, action) => {
	switch (action.type) {
		case actionTypes.CORRECT_GUESS:
			return true;

		default:
			return state;
	}
};
