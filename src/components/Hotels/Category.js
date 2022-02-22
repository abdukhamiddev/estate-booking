import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_BY_CATEGORY } from "../../requests/requests";
import Loader from "../Layout/Loader";
import Select from "react-select";
import { RiArrowDropDownFill } from "react-icons/ri";
import Place from "../Place";
import Hotels from "../../pages/Hotels";
import "./category.scss";

export default function Category() {
	const [filterParam, setFilterParam] = useState(1);

	const { loading, error, data } = useQuery(GET_BY_CATEGORY, {
		variables: { id: filterParam },
	});

	const options = [
		{ value: 1, label: "All" },
		{ value: 2, label: "Hotels" },
		{ value: 3, label: "Bed & Breakfast" },
		{ value: 4, label: "GuestHouses" },
	];

	const handleFilter = async (options) => {
		await setFilterParam(options.value);
	};

	return (
		<div className="hotels-page">
			<h1>Hotels</h1>
			<div className="hotels-filter">
				<Select
					defaultValue={{ value: 1, label: "All" }}
					options={options}
					onChange={handleFilter}
					name="filter"
					className="select"
				/>
			</div>
			{loading ? (
				<Loader />
			) : error ? (
				<>Error</>
			) : filterParam !== 0 || undefined ? (
				<div className="hotel-grid">
					{data.category.places.map((place) => (
						<Place place={place} />
					))}
				</div>
			) : (
				<Hotels />
			)}
		</div>
	);
}
