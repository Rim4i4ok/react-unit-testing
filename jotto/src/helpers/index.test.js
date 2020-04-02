import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", () => {
	const secretWord = "party";

	test("return correct count when are no mathing letters", () => {
		const letterMatchCount = getLetterMatchCount("bones", secretWord);
		expect(letterMatchCount).toBe(0);
	});

	test("return the correct count where there are 3 matching letters", () => {
		const letterMatchCount = getLetterMatchCount("train", secretWord);
		expect(letterMatchCount).toBe(3);
	});

	test("return correct count when ther are duplicated letters in the guesse", () => {
		const letterMatchCount = getLetterMatchCount("parka", secretWord);
		expect(letterMatchCount).toBe(3);
	});
});
