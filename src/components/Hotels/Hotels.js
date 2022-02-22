import { useQuery } from "@apollo/client";
import { GET_PLACES } from "../../requests/requests";
import Loader from "../Layout/Loader";
import Place from "../Place";

export default function HotelsCollection() {
	const { loading, error, data } = useQuery(GET_PLACES);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<>Error</>
			) : (
				<>
					<div className="hotel-grid">
						{data.places.map((place) => (
							<Place place={place} />
						))}
					</div>
				</>
			)}
		</>
	);
}
