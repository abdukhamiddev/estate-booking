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
