import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import client from "Apollo";
import theme from "Theme";

import Home from "pages/home";
import Data from "pages/data";
import DataInfo from "pages/datainfo";
import NoMatch from "pages/nomatch";
import Search from "pages/search";
import MyPage from "pages/mypage/MyPage";

import Layout from "components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor} !important;
  }
`;

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Layout>
                            <GlobalStyle />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/data" component={Data} />
                                <Route path="/data/info" component={DataInfo} />
                                <Route path="/search" component={Search} />
                                <Route path="/mypage" component={MyPage} />
                                <Route path="*" component={NoMatch} />
                            </Switch>
                        </Layout>
                    </Router>
                </ThemeProvider>
            </ApolloProvider>
        );
    }
}

export default App;
