import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "./App.css";

const client = new ApolloClient({
	uri: process.env.GRAHPQL_URL,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<AuthProvider>
			<Router>
				<ApolloProvider client={client}>
					<div className="App"></div>
				</ApolloProvider>
			</Router>
		</AuthProvider>
	);
}

export default App;
