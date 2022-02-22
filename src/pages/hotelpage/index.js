import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Loader from "../../components/Layout/Loader";
import { TiArrowBackOutline } from "react-icons/ti";
import { AiFillClockCircle, AiOutlineWifi } from "react-icons/ai";
import { MdFreeBreakfast } from "react-icons/md";

import { GET_HOTEL_BY_ID } from "../../requests/requests";

import "./hotel.scss";
const Hotel = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_HOTEL_BY_ID, {
		variables: { id: id },
	});
	console.log(id);
	return (
		<div className="container">
			{loading ? (
				<Loader />
			) : error ? (
				<div>Error...{error}</div>
			) : (
				<motion.div
					className="hotel-details"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Link to="/hotels">
						<Button text={<TiArrowBackOutline />} />
					</Link>
					<img
						src={data.place.Image[0].url}
						alt={data.place.Image[0].alternativeText}
						className="hotel-details__image"
					/>
					<div className="hotel-card__content">
						<div className="hotel-card__content-container">
							<h1>{data.place.Title}</h1>
							<p className="hotel-details__description">
								{data.place.Description}
							</p>
							<p className="hotel-details__address">{data.place.Address}</p>
							<article className="hotel-details__amenities">
								<div className="hotel-details__col">
									<AiFillClockCircle />
									<div>Check in: 15:00 </div>
									<div> Check out: 12:00</div>
								</div>
								<div className="hotel-details__col">
									<AiOutlineWifi /> Free Wifi
								</div>
								<div className="hotel-details__col">
									<MdFreeBreakfast /> Breakfast Included
								</div>
							</article>
							<div className="hotel-details__price">
								<span>From</span>
								<span className="price-number"> ${data.place.Price}</span>
							</div>
							<Link to={`/booking/${data.place.id}`}>
								<Button text="Book now" />
							</Link>
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default Hotel;
