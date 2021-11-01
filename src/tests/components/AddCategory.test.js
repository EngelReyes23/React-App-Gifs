import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas al component <AddCategory />", () => {
	// simula el argumento de funcion que requiere el componente
	const setCategories = jest.fn();
	// simula el argumento de funcion que requiere el componente
	let wrapper;

	// beforeEach limpia todo el rastro de eventos
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	// 1ra prueba
	test("debe mostrar correctamente el componente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	//
	// test("debe cambiar la caja de texto", () => {
	// 	const input = wrapper.find("input");
	// 	input.simulate("change", { target: { value: "Hola" } });
	// 	expect(input.text().trim()).toBe("Hola");
	// });

	// 2da prueba
	test("no debe postear la informacion on Submit", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	// 3ra prueba
	test("debe de llamar al setCategories y limpiar la caja de texto", () => {
		/**
		 * 1- Simula el inputChange
		 * 2- Simula el submit
		 * 3- setCategories se debe de haber llamado
		 * 4. el valor del input debe de estar vacio
		 */

		// Simula el input change
		wrapper.find("input").simulate("change", { target: { value: "Hola" } });

		// Simula el submit
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		// verifica si setCategories fue llamado
		expect(setCategories).toHaveBeenCalled();

		// verifica si el valor del input esta vacio
		expect(wrapper.find("input").prop("value")).toBe("");
	});
});
