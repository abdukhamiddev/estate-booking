import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/HomePage/Hero";
import FeaturedPlaces from "../../components/HomePage/FeaturedPlaces";
import Categories from "../../components/HomePage/Categories";
import "./Home.scss";

const HomePage = () => {
	return (
		<motion.div
			className="home-wrapper"
			variants={{ duration: 1 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Hero />
			<FeaturedPlaces />
			<div className="category-container">
				<h2 className="heading-medium">Sleep the way you want</h2>
				<p className="paragraph u-centered">
					Choose between hotels bed &amp; breakfast and guesthouses
				</p>
				<Categories />
			</div>
		</motion.div>
	);
};
export default HomePage;
