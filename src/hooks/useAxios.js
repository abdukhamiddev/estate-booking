import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const url = process.env.API_URL;

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use((config) => {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		return config;
	});
	return apiClient;
}
