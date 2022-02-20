import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Explore = () => {
	return (
		<div className="explore">
			<h2>Explore our hotels definitely you will find your dream stay</h2>
			<Link to="/places">
				<Button text="Explore" />
			</Link>
		</div>
	);
};

export default Explore;
