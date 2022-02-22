import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import "./Explore.scss";

const Explore = () => {
	return (
		<div className="explore">
			<h2 className="heading-m exp">
				Explore our hotels definitely you will find your dream stay
			</h2>
			<Link to="/hotels">
				<Button text="Explore" />
			</Link>
		</div>
	);
};

export default Explore;
