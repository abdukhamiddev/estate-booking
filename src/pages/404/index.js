import React from "react";
import { motion } from "framer-motion";
import NotFound from "../../assets/svg/404.svg";
import "./404.scss";

const Page404 = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="page-404"
		>
			<h1>404</h1>
			<img src={NotFound} alt="404 " />
		</motion.div>
	);
};

export default Page404;
