import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Header from "./components/Layout/Header";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Layout/Footer";
import Hotels from "./pages/Hotels";
import Page404 from "./pages/404";

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
					<div className="app">
						<Header handleClick={displayModal} />
						<main>
							<AnimatePresence>
								<Routes>
									<Route path="/" element={<HomePage />} exact />
									<Route path="/hotels" element={<Hotels />} />
									<Route path="*" element={<Page404 />} />
								</Routes>
							</AnimatePresence>
						</main>
						<Footer />
					</div>
				</ApolloProvider>
			</Router>
		</AuthProvider>
	);
}

export default App;
