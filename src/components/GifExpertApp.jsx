import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
	//
	const [categories, setCategories] = useState([]);

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

export default GifExpertApp;
