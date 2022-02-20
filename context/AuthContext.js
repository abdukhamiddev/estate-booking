import React from "react";
import useLocalStorage from "../src/hooks/useLocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
	const [auth, setAuth] = useLocalStorage("auth", null);

	return <AuthProvider value={[auth, setAuth]}>{props.children}</AuthProvider>;
};

export default AuthContext;
