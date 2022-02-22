import { useContext, useState } from "react";
import AuthContext from "./../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import logo from ".././../../assets/svg/logo.svg";
import SmallLogo from ".././../../assets/svg/logo-small.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./Header.scss";

export default function Header({ handleClick }) {
	const [auth, setAuth] = useContext(AuthContext);
	const [open, setOpen] = useState(false);

	const navigate = useNavigate();

	const logout = () => {
		setAuth(null);
		navigate("/");
	};

	return (
		<>
			<div className="header">
				<Link to="/">
					<img
						className="header__logo"
						src={SmallLogo}
						srcSet={`${SmallLogo}, 360w ${logo} 1100w`}
						alt=""
					/>
				</Link>
				<div className="header__hamburger" onClick={() => setOpen(!open)}>
					{open ? <RiCloseLine /> : <HiOutlineMenuAlt4 />}
				</div>
				<nav>
					<ul className={open ? "header__links--open" : "header__links"}>
						<Link to="/" onClick={() => setOpen(false)}>
							<li className="header__item">Home</li>
						</Link>
						<Link to="/hotels">
							<li className="header__item">Hotels</li>
						</Link>
						<Link to="/contact">
							<li className="header__item">Contact</li>
						</Link>
						{auth ? (
							<>
								<Link to="/dashboard">
									<li className="header__item">Dashboard</li>
								</Link>
								<li>
									<button className="circular-btn-main" onClick={logout}>
										<IoLogOutOutline />
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<button className="circular-btn-main" onClick={handleClick}>
										<AiOutlineUser />
									</button>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</>
	);
}
