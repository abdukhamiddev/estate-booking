import React, { useContext, useState } from "react";
import { API_URL, TOKEN_PATH } from "../../../constants/api";
import "./LoginForm.scss";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import LoginModal from "../LoginModal";
import Button from "../../common/Button";

const url = API_URL + TOKEN_PATH;

const schema = yup.object().shape({
	email: yup
		.string()
		.required("Please enter your email address")
		.email("Please enter a valid email address"),
	password: yup.string().required("Password is Required"),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password must match"),
});
const LoginForm = () => {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [auth, setAuth] = useContext(AuthContext);
	const onSubmit = async (data) => {
		setSubmitting(true);
		setLoginError(null);
		try {
			if ([auth]) {
				const res = await axios.post(url, {
					identifier: data.email,
					password: data.password,
				});
				setAuth(res.data);
				navigate("/dashboard");
				window.location.reload();
			}
		} catch (error) {
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<div>
			<LoginModal />
			<form onSubmit={handleSubmit(onSubmit)} className="modal__right">
				{loginError && <p className="error">{loginError}</p>}

				<h2 className="heading-m">Login</h2>

				<fieldset disabled={submitting}>
					<input
						type="text"
						placeholder="Type your email"
						{...register("email")}
					/>
					{errors.email && (
						<span className="error">{errors.email.message}</span>
					)}
					<input
						type="password"
						placeholder="Type your password"
						{...register("password")}
					/>
					{errors.password && (
						<span className="error">{errors.password.message}</span>
					)}

					<Button
						type="submit"
						className="btn-main"
						text={submitting ? " Logging In..." : "Login"}
					/>
				</fieldset>
			</form>
		</div>
	);
};

export default LoginForm;
