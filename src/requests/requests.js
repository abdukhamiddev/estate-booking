import { gql } from "@apollo/client";

export const FEATURED = gql`
	query GetFeatured {
		category(id: 1) {
			places {
				Title
				Rating
				Image {
					url
					alternativeText
				}
				Price
				id
			}
		}
	}
`;
export const GET_BY_CATEGORY = gql`
	query GetCategory($id: ID!) {
		category(id: $id) {
			places {
				Title
				Rating
				Image {
					url
					alternativeText
				}
				Price
				id
			}
		}
	}
`;
export const GET_PLACES = gql`
	query myQuery {
		places {
			id
			Title
			Rating
			Price
			Image {
				url
				alternativeText
			}
		}
	}
`;

export const GET_HOTEL_BY_ID = gql`
	query getHotel($id: ID!) {
		place(id: $id) {
			Title
			Description
			Image {
				url
				alternativeText
			}
			Rating
			Price
			Address
			id
		}
	}
`;
