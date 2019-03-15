import React from "react";
//import styled from "styled-components";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Container, Row, Col } from 'reactstrap';

import { Link } from "react-router-dom";



class ErrorLink extends React.Component{
    /*constructor(props) {
        super(props);
    }*/

    render(){
        return(
            <div>
                <h3> Helpful Links </h3>
                <Link to="/"> home</Link>
                <Link to="/data"> Data</Link>
                <Link to="/analyze"> Analyze</Link>
                <Link to="/interprete"> Interprete</Link>

                <h3> 이 웹사이트에서 검색 </h3>
                

            </div>
        );
    }


}

export default ErrorLink;