import React from "react";
import {
	FacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<FacebookSquare />
				</li>
				<li>
					<FaTwitterSquare />
				</li>
				<li>
					<FaInstagramSquare />
				</li>
			</ul>
			<p>2022 &cop. All rights reserved</p>
		</footer>
	);
};

export default Footer;
