import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
	// Estado del input
	const [inputValue, setInputValue] = useState("");

	//
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	//
	const handleSubmit = (e) => {
		e.preventDefault();

		// Verifica que inputValue no esté vacío
		if (inputValue !== "") {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleInputChange}
				placeholder="Busca Algo"
				value={inputValue}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
