import React from "react";
import PropTypes from "prop-types";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGridItems from "./GifGridItems";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {
	const { data: imgs, loading } = useFetchGif(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <Spinner />}

			<div className="card-grid">
				{imgs.map((img) => (
					<GifGridItems {...img} key={img.id} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
