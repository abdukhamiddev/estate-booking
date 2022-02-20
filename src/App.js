import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Header from "./components/Layout/Header";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_URL,
	cache: new InMemoryCache(),
});

function App() {
	const [showModal, setShowModal] = useState(false);

	const displayModal = () => {
		setShowModal(!showModal);
	};
	return (
		<AuthProvider>
			<Router>
				<ApolloProvider client={client}>
					<Header handleClick={displayModal} />
					<main>
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</main>
				</ApolloProvider>
			</Router>
		</AuthProvider>
	);
}

export default App;
