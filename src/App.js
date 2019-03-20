import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import client from "./Apollo";
import theme from "./Theme";

import Home from "./pages/home";
import Data from "./pages/data";
import Interprete from "./pages/interprete";
import Analyze from "./pages/analyze";

import Layout from "./components/Layout";

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<Router>
						<Layout>
							<Route exact path="/" component={Home} />
							<Route path="/data" component={Data} />
							<Route path="/interprete" component={Interprete} />
							<Route path="/analyze" component={Analyze} />
						</Layout>
					</Router>
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

export default App;
