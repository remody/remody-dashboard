import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";

import client from "./Apollo";

import Home from "./pages/home";
import Data from "./pages/data";

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<>
						<Route exact path="/" component={Home} />
						<Route path="/data" component={Data} />
					</>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
