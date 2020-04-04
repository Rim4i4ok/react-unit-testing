export const actionTypes = {
	CORRECT_GUESS: "CORRECT_GUESS",
	GUESS_WORD: "GUESS_WORD",
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function
 * @param {string} guessedWord - Guessed word.
 * @return {function} - Redux Thunk function.wa
 */
export const guessWord = guessedWord => {
	return function(dispatch, getState) {};
};
