import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { FEATURED } from "./../../../requests/requests";
import Loader from "../../Layout/Loader/index";
import { GiRoundStar } from "react-icons/gi";
import "./Featured.scss";

const FeaturedPlaces = () => {
	const { loading, error, data } = useQuery(FEATURED);
	console.log(data);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<></>
			) : (
				<>
					<div className="featured-section">
						<h2 className="heading-m">Popular Places</h2>
						<div className="hotel-grid">
							{data?.category.places.map((place) => (
								<Link to={`/details/${place.id}`} key={place.id}>
									<div key={place.id} className="hotel-card">
										<div className="hotel-card__image-wrapper">
											<img
												src={place.Image[0].url}
												alt={place.Image[0].alternativeText}
											/>
											<div className="rating">
												<span className="rating__icon">
													<GiRoundStar />
												</span>
												{place.Rating}
											</div>
										</div>
										<div className="hotel-card__content">
											<h2>{place.Title}</h2>
											<div className="info">
												<div className="price">
													<span>From: </span>
													<span className="price-number">
														${place.Price / 4}
													</span>
												</div>
												<div className="hotel-card__bottom">
													<div className="featured-badge">Popular</div>
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FeaturedPlaces;
