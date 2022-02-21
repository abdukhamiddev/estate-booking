import React from "react";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<FaFacebookSquare />
				</li>
				<li>
					<FaTwitterSquare />
				</li>
				<li>
					<FaInstagramSquare />
				</li>
			</ul>
			<p>2022 &copy; All rights reserved</p>
		</footer>
	);
};

export default Footer;
