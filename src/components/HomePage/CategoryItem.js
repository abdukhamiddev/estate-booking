import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CategoryItem = ({ imageUrl, description }) => {
	return (
		<div className="category">
			<Link to="/places">
				<div className="category__img-container">
					<img className="category_image" src={imageUrl} alt={description} />
				</div>
				<h5 className="category-title">
					{description}{" "}
					<span>
						<HiOutlineArrowNarrowRight />
					</span>
				</h5>
			</Link>
		</div>
	);
};

export default CategoryItem;
