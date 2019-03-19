import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import client from "./Apollo";

import Home from "./pages/home";
import Data from "./pages/data";
import Interprete from "./pages/interprete";
import NoMatch from "./pages/nomatch";
import Analyze from "./pages/analyze";

import Layout from "./components/Layout";

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/data" component={Data} />
							<Route path="/interprete" component={Interprete} />
							<Route path="/analyze" component={Analyze} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</Layout>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
