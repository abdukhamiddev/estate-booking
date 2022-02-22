import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../common/Button";
import { ImCheckboxChecked } from "react-icons/im";
import "./contactForm.scss";

const schema = yup.object().shape({
	Email: yup
		.string()
		.required("Please enter your email address")
		.email("Please enter your valid email address"),
	Name: yup.string().required("Your name is required"),
	Content: yup.string().required("Please write a message"),
});

export default function ContactForm() {
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitnError] = useState(null);
	const [submitMessage, setSubmitMessage] = useState(false);

	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append(
			"data",
			JSON.stringify({
				Name: data.name,
				Email: data.email,
				Content: data.content,
			})
		);
		setSubmitting(true);
		setSubmitnError(null);
		try {
			console.log("submitting");
		} catch (error) {
			setSubmitnError(error.toString);
		} finally {
			setSubmitting(false);
			reset({});
			setSubmitMessage(true);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset disabled={submitting}>
				<label className="form__label" htmlFor="Name">
					Full Name
				</label>
				<input type="text" placeholder="Your Name" {...register("Name")} />
				<label className="form__label" htmlFor="Email">
					Email
				</label>
				<input type="email" placeholder="Your Email" {...register("Email")} />
				<label className="form__label" htmlFor="Content">
					Message
				</label>
				<textarea
					type="text"
					placeholder="Your Message"
					{...register("Content")}
				/>
				<Button
					text={submitting ? "Sending..." : "Send"}
					className="btn-main"
					disabled={submitting}
					type="submit"
				/>
				{submitMessage ? (
					<p className="form-success">
						<ImCheckboxChecked /> We have received your booking request!!
					</p>
				) : null}
			</fieldset>
		</form>
	);
}
