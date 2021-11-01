import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories }) => {
	//
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory setCategories={setCategories} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}

			<footer>
				<p>&copy; Engel David Reyes Sandoval</p>
			</footer>
		</>
	);
};

// // PropTypes requeridos
// GifExpertApp.propTypes = {
// 	defaultCategories: PropTypes.array.isRequired,
// };

// PropTypes por default
GifExpertApp.defaultProps = {
	defaultCategories: [],
};

export default GifExpertApp;
