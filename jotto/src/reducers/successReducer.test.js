import { actionTypes } from "../actions/index";
import sucessReducer from "./successReducer";

test("returns default initial state of `false` when no action is passed", () => {
	const newState = sucessReducer(undefined, {});
	expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `CORRECT_GUESS`", () => {
	const newState = sucessReducer(undefined, {
		type: actionTypes.CORRECT_GUESS,
	});
	expect(newState).toBe(true);
});
