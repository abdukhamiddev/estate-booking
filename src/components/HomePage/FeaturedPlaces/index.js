import { useQuery } from "@apollo/client";
import React from "react";

import { FEATURED } from "./../../../requests/requests";
import Loader from "../../Layout/Loader/index";

import "./Featured.scss";
import Place from "../../Place";

const FeaturedPlaces = () => {
	const { loading, error, data } = useQuery(FEATURED);
	console.log(data);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<div>Error</div>
			) : (
				<>
					<div className="featured-section">
						<h2 className="heading-m">Popular Places</h2>
						<div className="hotel-grid">
							{data?.category.places.map((place) => (
								<Place place={place} />
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FeaturedPlaces;
