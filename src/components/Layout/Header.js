import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { IoLogOutOutLine } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

export default function Header({ handleClick }) {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	const logout = () => {
		setAuth(null);
		history.push("/");
	};

	return (
		<>
			<div className="header">
				<Link to="/">
					<h1 className="header__logo">Holidaze</h1>
				</Link>

				<nav>
					<ul className="header__links">
						<Link>
							<li className="header__item">Home</li>
						</Link>
						<Link>
							<li className="header__item">Places</li>
						</Link>
						<Link>
							<li className="header__item">Contact</li>
						</Link>
						{auth ? (
							<>
								<Link to="/dashboard">
									<li className="header__item">Dashboard</li>
								</Link>
								<li>
									<button className="circular-btn-main" onClick={logout}>
										<IoLogOutOutLine />
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
