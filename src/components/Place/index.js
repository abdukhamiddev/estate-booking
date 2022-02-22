import React from "react";
import { Link } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";

const Place = ({ place }) => {
	return (
		<Link to={`/details/${place.id}`} key={place.id}>
			<div key={place.id} className="hotel-card">
				<div className="hotel-card__image-wrapper">
					<img src={place.Image[0].url} alt={place.Image[0].alternativeText} />
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
							<span className="price-number">${place.Price / 4}</span>
						</div>
						<div className="hotel-card__bottom">
							<div className="featured-badge">Popular</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Place;
