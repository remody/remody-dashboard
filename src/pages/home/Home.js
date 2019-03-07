import React from "react";
import { Query } from "react-apollo";
import { ALL_USER } from "../../queries";
const Home = () => (
	<Query query={ALL_USER}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;

			return data.users.map(({ name, email, id }) => (
				<div key={id}>
					<p>
						{name}: {email}
					</p>
				</div>
			));
		}}
	</Query>
);
export default Home;
