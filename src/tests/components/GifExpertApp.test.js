import GifExpertApp from "../../components/GifExpertApp";
import { shallow } from "enzyme";

describe("Probando el component <GifExpertApp />", () => {
	// 1ra prueba
	test("debe mostrarse correctamente", () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	// 2da pruebas
	test("debe mostrar una lista de categorias", () => {
		// arrray de categorias
		const categorias = ["One Punch", "Samurai X", "Dragon Ball"];

		// instacia
		const wrapper = shallow(<GifExpertApp defaultCategories={categorias} />);

		// verificar que se muestre la lista de categorias
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("GifGrid").length).toBe(categorias.length);
	});
});
