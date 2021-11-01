import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");

describe("Pruebas a <GifGrid />", () => {
	// instacia de wrapper
	let wrapper;
	beforeEach(() => {
		useFetchGif.mockReturnValue({
			data: [],
			loading: true,
		});
		wrapper = shallow(<GifGrid category="Goku" />);
	});

	// 1ra prueba
	test("Debe de mostrar el componente correctamente", () => {
		//
		expect(wrapper).toMatchSnapshot();
	});

	// 2da prueba
	test("debe de mostrar items cuando se cargan imagenes useFetchGif", () => {
		const gifs = [
			{
				id: "ABC",
				url: "https://localhost/cualquiercosa.jpg",
				title: "Cualquier cosa",
			},
			{
				id: "ABC2",
				url: "https://localhost/cualquiercosa.jpg",
				title: "Cualquier cosa2",
			},
		];
		useFetchGif.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category="Goku" />);
		expect(wrapper).toMatchSnapshot();

		// verifica que el loader del parrafo exista
		expect(wrapper.find("p").exists()).toBe(false);

		// verifica que el componente GifGrid exista
		expect(wrapper.find("GifGridItems").length).toBe(gifs.length);
	});
});
