import React from "react";
import styled from "styled-components";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, Button, Input } from 'reactstrap';

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
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
    ${props => props.h1 &&`
        font-family: 'Fredoka One', cursive;
        font-size: 168px;
        margin: 0px;
        color: #ff508e;
        text-transform: uppercase;
    `};
`
const ErrorMessage2 = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    font-weight: 400;
    color: #222;
    margin: 0;
`;

const ErrorPage = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
    display: inline-block;
    font-weight: 700;
    border-radius: 15px;
    text-decoration: none;
`;

const Search = styled.div`
    display:inline-block;
    position: relative;
    margin: 30px auto 22px;
`;


class ErrorLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            addressData:[{
                id:1,
                address:'/'
            },{
                id:2,
                address:'data'
            },{
                id:3,
                address:'analyze'
            },{
                id:4,
                address:'interprete'
            }
        ]
        };
    }

    eventClick = () =>{};
    handleChange = (e) =>{
        this.setState({
            keyword: e.target.value
        })
    };

    render(){
        return(
            <NotFound>
                <Wrap>
                    <ErrorMessage h1>
                        404
                    </ErrorMessage>
                    <ErrorMessage2>
                        Oops, The Page you are looking for can't be found!
                    </ErrorMessage2>

                    <Search>
                        <Form inline>
                            <FormGroup>
                                <Input style={{ 
                                    margin: "10px"
                                }}
                                placeholder="Search.." 
                                value={this.state.keyword}
                                onChange={this.handleChange}
                                />
                                <Button onClick={this.eventClick} color="danger">Search</Button>
                            </FormGroup>
                        </Form>

                        <ErrorPage>              
                            <Link to="/">{'<'} Return To Homepage</Link>
                        </ErrorPage>  
                    </Search>

                </Wrap>
            </NotFound>
        );
    }


}

export default ErrorLink;