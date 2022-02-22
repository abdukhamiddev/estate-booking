import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./CategoryItem.scss";

const CategoryItem = ({ imageUrl, description }) => {
	return (
		<div className="category">
			<Link to="/hotels">
				<div className="category__img-container">
					<img className="category_image" src={imageUrl} alt={description} />
				</div>
				<h5 className="category__title">
					{description}
					<span className="arrow-icon">
						<HiOutlineArrowNarrowRight />
					</span>
				</h5>
			</Link>
		</div>
	);
};

export default CategoryItem;
