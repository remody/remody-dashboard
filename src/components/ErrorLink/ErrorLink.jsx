import React from "react";
import styled from "styled-components";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = styled.div`
    height: 85vh;
`;

const Wrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    max-width: 710px;
    width: 100%;
    text-align: center;
    padding: 0px 15px;
    line-height: 1.4;
`;

const ErrorMessage = styled.div`
    height: 200px;
    line-height: 200px;
    ${props =>
        props.h1 &&
        `
        font-size: 168px;
        margin: 0px;
        color: ${props => props.theme.primaryFontColor};
        text-transform: uppercase;
    `};
`;
const ErrorMessage2 = styled.div`
    font-size: 22px;
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
    margin: 0;
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 30px auto 22px;
`;

const ErrorPage = styled.div`
    display: block;
    font-weight: 700;
    border-radius: 15px;
    text-decoration: none;
`;

class ErrorLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        };
    }

    addressArray = [
        {
            url: "/",
            name: "HOME"
        },
        {
            url: "/data",
            name: "DATA"
        },
        {
            url: "/search",
            name: "SEARCH"
        },
        {
            url: "/interprete",
            name: "INTERPRETE"
        }
    ];

    eventClick = () => {
        const [address] = this.addressArray.filter(
            item => item.name === this.state.keyword.toUpperCase()
        );

        if (!address) {
            window.location.reload(true);
        } else {
            window.location.href = `http://${window.location.host}${
                address.url
            }`;
        }
    };

    handleChange = e => {
        this.setState({
            keyword: e.target.value
        });
    };

    render() {
        return (
            <NotFound>
                <Wrap>
                    <ErrorMessage h1>404</ErrorMessage>
                    <ErrorMessage2>
                        Oops, The Page you are looking for can't be found!
                    </ErrorMessage2>

                    <Search>
                        <FormGroup
                            style={{
                                marginRight: "1rem"
                            }}
                        >
                            <Input
                                style={{
                                    margin: "10px"
                                }}
                                placeholder="Search.."
                                value={this.state.keyword}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.eventClick} color="secondary">
                                Search
                            </Button>
                        </FormGroup>
                    </Search>

                    <ErrorPage>
                        <Link to="/">{"<"} Return To Homepage</Link>
                    </ErrorPage>
                </Wrap>
            </NotFound>
        );
    }
}

export default ErrorLink;
