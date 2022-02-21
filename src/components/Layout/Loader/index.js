import React from "react";
import { ReactComponent as LoaderSvg } from "../../../assets/svg/loader.svg";
import "./Loader.scss";
const Loader = () => {
	return (
		<div className="loader">
			<LoaderSvg className="loader__svg" />
		</div>
	);
};

export default Loader;
