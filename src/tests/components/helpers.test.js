import { getGifs } from "../../helpers/getGif";

describe("Testiando helper getGif fecth", () => {
	//
	test("debe traer 10 elementos", async () => {
		const gif = await getGifs("yarn");
		expect(gif.length).toBe(10);
	});

	//
	test("debe traer 0 elementos", async () => {
		const gif = await getGifs("");
		expect(gif.length).toBe(0);
	});
});
