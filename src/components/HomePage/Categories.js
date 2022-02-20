import React from "react";
import CategoryItem from "./CategoryItem";
import Hotels from "../../assets/hotels.webp";
import GuestHouses from "../../assets/guesthouses.webp";
import BnB from "../../assets/bnb.webp";
const Categories = () => {
	return (
		<div className="categories">
			<div className="slider-container">
				<CategoryItem imageUrl={Hotels} description="Hotels" />
				<CategoryItem imageUrl={GuestHouses} description="Bed and Breakfast" />
				<CategoryItem imageUrl={BnB} description="GuestHouses" />
			</div>
		</div>
	);
};

export default Categories;
