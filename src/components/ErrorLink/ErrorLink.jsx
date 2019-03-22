import React from "react";
import styled from "styled-components";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, Button, Input } from "reactstrap";
//import Fredoka from '../../public/fonts/Fredoka-One.ttf';
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
	/* TODO: 여기에서 color 가능하다면 ThemeProvider에게 받아서 해주세요! 혼자만 색깔이 튀는거 같아요 ㅠㅠ  */
	height: 200px;
	line-height: 200px;
	${props =>
		props.h1 &&
		`
        font-size: 168px;
        margin: 0px;
        color: #ff508e;
        text-transform: uppercase;
    `};
`;
const ErrorMessage2 = styled.div`
	/* TOOD: 애두...! */
	font-family: "Raleway", sans-serif;
	font-size: 22px;
	font-weight: 400;
	color: #222;
	margin: 0;
`;

const ErrorPage = styled.div`
	font-family: "Raleway", sans-serif;
	display: inline-block;
	font-weight: 700;
	border-radius: 15px;
	text-decoration: none;
`;

const Search = styled.div`
	display: inline-block;
	position: relative;
	margin: 30px auto 22px;
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
			name: "Home"
		},
		{
			url: "/data",
			name: "Data"
		},
		{
			url: "/analyze",
			name: "Analyze"
		},
		{
			url: "/interprete",
			name: "Interprete"
		}
	];

	eventClick = () => {
		const [address] = this.addressArray.filter(
			item => item.name === this.state.keyword
		);
		window.location.href = `http://${window.location.host}${address.url}`;
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
						<FormGroup>
							<Input
								style={{
									margin: "10px"
								}}
								placeholder="Search.."
								value={this.state.keyword}
								onChange={this.handleChange}
							/>
							<Button onClick={this.eventClick} color="danger">
								Search
							</Button>
						</FormGroup>

						<ErrorPage>
							<Link to="/">{"<"} Return To Homepage</Link>
						</ErrorPage>
					</Search>
				</Wrap>
			</NotFound>
		);
	}
}

export default ErrorLink;
