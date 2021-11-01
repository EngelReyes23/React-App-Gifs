import React from "react";
import PropTypes from "prop-types";

const GifGridItems = ({ title, url }) => {
	return (
		<div className="card animate__animated animate__fadeIn">
			<a href={url} target="_blank" rel="noreferrer">
				<img src={url} alt={title} />
			</a>
			<p>{title}</p>
		</div>
	);
};

GifGridItems.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItems;
