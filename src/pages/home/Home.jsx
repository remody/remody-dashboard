import React from "react";
import { Query } from "react-apollo";
import { ALL_USER } from "../../graphql";
const Home = () => (
	<Query query={ALL_USER}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;

			return (
				<div className="container">
					{data.users.map(({ name, email, id }) => (
						<div key={id}>
							<p>
								{name}: {email}
							</p>
						</div>
					))}
				</div>
			);
		}}
	</Query>
);
export default Home;
