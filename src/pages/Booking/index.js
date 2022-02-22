import { useQuery, gql } from "@apollo/client";

import { useParams } from "react-router";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ImCheckboxChecked } from "react-icons/im";

import { motion } from "framer-motion";
import Button from "../../components/common/Button";
import Loader from "../../components/Layout/Loader";
import "./Booking.scss";

const schema = yup.object().shape({
	first_name: yup.string().required("Please enter your first name."),
	last_name: yup.string().required("Please enter your last name"),
	email: yup.string().required("Please enter your email"),
	phone: yup
		.number()
		.required("Please enter your phone number")
		.positive()
		.integer(),
	date_from: yup.date().required("A check-in date is required"),
	date_to: yup.date().required("A check-out date is required"),
	message: yup.string().required("Please enter a message"),
});

const HOTEL = gql`
	query getHotel($id: ID!) {
		place(id: $id) {
			Title
			Description
			Image {
				url
				alternativeText
			}
			Rating
			Price
			id
		}
	}
`;

export default function Booking() {
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [submitMessage, setSubmitMessage] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const { id } = useParams();
	const { loading, error, data } = useQuery(HOTEL, {
		variables: { id: id },
	});

	if (loading) return <Loader />;
	if (error) return <p>Error...</p>;

	const hotelName = data.place.Title;

	const submitBooking = async (data) => {
		const formData = new FormData();
		formData.append(
			"data",
			JSON.stringify({
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
				phone: data.phone,
				date_from: data.date_from,
				date_to: data.date_to,
				message: data.message,
				hotel_name: hotelName,
			})
		);

		setSubmitting(true);
		setSubmitError(null);

		try {
			console.log("success");
		} catch (error) {
			setSubmitError(error.toString());
		} finally {
			setSubmitting(false);
			reset({});
			setSubmitMessage(true);
		}
	};

	return (
		<div className="container book">
			<motion.div
				className="booking"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<header className="booking__header">
					<img
						src={data.place.Image[0].url}
						alt={data.place.Image[0].alternativeText}
						className=""
					/>

					<h1>{`Book ${data.place.Title} now!`} </h1>
				</header>

				<form onSubmit={handleSubmit(submitBooking)} className="form">
					<fieldset disabled={submitting}>
						<label for="first_name" className="form__label">
							First name
						</label>
						<input
							{...register("first_name")}
							type="text"
							placeholder="Your first name"
						/>

						<label for="last_name" className="form__label">
							Last name
						</label>
						<input
							{...register("last_name")}
							type="text"
							placeholder="Your last name"
						/>

						<label for="email" className="form__label">
							Email
						</label>
						<input
							{...register("email")}
							type="text"
							placeholder="Your email"
						/>

						<label for="phone" className="form__label">
							Phone
						</label>
						<input
							{...register("phone")}
							type="text"
							placeholder="Your phone number"
						/>

						<label for="date_from" className="form__label">
							Check-in
						</label>
						<input {...register("date_from")} type="date" />

						<label for="date_to" className="form__label">
							Check-out
						</label>
						<input {...register("date_to")} type="date" />

						<label for="message" className="form__label">
							Message
						</label>
						<textarea {...register("message")} placeholder="Your message" />

						<Button
							disabled={submitting}
							type="submit"
							className="btn-main"
							text={submitting ? "Sending..." : "Book now"}
						/>
						{submitMessage ? (
							<p className="form-success">
								<ImCheckboxChecked /> Thank you for contacting us!
							</p>
						) : null}
					</fieldset>
					{submitError && <span className="form-error">{submitError}</span>}
				</form>
			</motion.div>
		</div>
	);
}
