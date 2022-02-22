import React from "react";
import "./LoginModal.scss";
import Login from "../../../assets/svg/login.svg";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "../LoginForm";

const LoginModal = ({ shown, close }) => {
	return shown ? (
		<>
			<div
				className="model-backdrop"
				onClick={() => {
					close();
				}}
			/>
			<div
				className="modal"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="modal__left">
					<img src={Login} alt="Login Illustration" className="img-hover" />
				</div>
				<div className="modal__right">
					<button className="modal-close" onClick={close}>
						<AiOutlineClose />
					</button>
					<div className="login">
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	) : null;
};

export default LoginModal;
