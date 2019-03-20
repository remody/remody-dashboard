import React from "react";
import { Query } from "react-apollo";
import { ALL_USER } from "../../graphql";
import styled from "styled-components";

const Toper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	background-color: ${props => props.theme.secondaryBackgroundColor};
	height: 45px;
	padding: 0 20px;
`;

const Home = () => (
	<Query query={ALL_USER}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;

			return (
				<>
					<Toper>Home</Toper>
					<div className="container">
						{data.users.map(({ name, email, id }) => (
							<div key={id}>
								<p>
									{name}: {email}
								</p>
							</div>
						))}
					</div>
				</>
			);
		}}
	</Query>
);
export default Home;
