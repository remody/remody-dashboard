import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import client from "./Apollo";

import Home from "./pages/home";
import Data from "./pages/data";

import Layout from "./components/Layout";

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Layout>
						<Route exact path="/" component={Home} />
						<Route path="/data" component={Data} />
					</Layout>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
