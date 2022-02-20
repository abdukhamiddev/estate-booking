import React from "react";

import HeroImg from "../../assets/3.webp";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__content">
				<h1 className="hero__title-main">Explore Hotels</h1>
				<h2 className="hero__title-sub">Find your dream stay</h2>
				<motion.div
					animate={{ y: "20px" }}
					transition={{
						type: "spring",
						stiffness: 300,
						duration: 2,
						repeat: Infinity,
					}}
					className="hero__icon"
				>
					<HiOutlineChevronDown />
				</motion.div>
			</div>
			<div className="hero__img-container">
				<img src={HeroImg} alt="Woman walking" />
				<img src="" alt="" className="overlay" />
			</div>
		</div>
	);
};

export default Hero;
