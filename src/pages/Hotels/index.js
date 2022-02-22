import { motion } from "framer-motion";
import React from "react";
import Category from "../../components/Hotels/Category";

import "./hotels.scss";
const Hotels = () => {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Category />
		</motion.div>
	);
};

export default Hotels;
