import { shallow } from "enzyme";
import GifGridItems from "../../components/GifGridItems";

describe("Pruebas en <GifGrindItems />", () => {
	//
	const wrapper = shallow(<GifGridItems title="titulo" url="url" />);

	//
	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	//
	test("debe tener un parrafo con el title", () => {
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe("titulo");
	});

	//
	test("debe tener un src con el url y un alt con el titulo", () => {
		const url = wrapper.find("img").props();
		expect(url.src).toBe("url");
		expect(url.alt).toBe("titulo");
	});

	//
	test("debe tener la clase animate__fadeIn", () => {
		const className = wrapper.find("div").prop("className");
		expect(className.includes("animate__fadeIn")).toBe(true);
	});
});
