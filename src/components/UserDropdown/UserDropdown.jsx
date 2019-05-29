import React, { useState } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { ME } from "graphqls";

const UserDropdownLeftAlign = styled.div`
    justify-content: flex-end;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.primaryColor};
    height: 45px;
    color: ${props => props.theme.primaryFontColor};
    padding-left: 20px;
`;

const Dropdown = styled.div`
    display: ${props => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 50px;
    right: 12px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.25rem;
    background-color: ${props => props.theme.secondaryBackgroundColor};
    z-index: 100;
`;

const Devider = styled.div`
    display: block;
    width: 100%;
    padding: 0 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    margin: 0.25rem 0;
`;

const DropdownItem = styled.div`
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    &:hover,
    &:focus {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }
`;

const MobileHeading = styled.div`
    padding-right: 20px;
    border-right: 2px solid #fff;
`;

const sideItemArray = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/data",
        name: "Data"
    },
    {
        url: "/search",
        name: "Search"
    }
];

const LinkDropDown = props => {
    const hrefFunction = () => {
        props.handleDropDown(false);
    };
    return (
        <Link to={props.url}>
            <DropdownItem onClick={hrefFunction}>{props.name}</DropdownItem>
        </Link>
    );
};

const UserDropdown = props => {
    const [isOpen, handleDropDown] = useState(false);
    const token = localStorage.getItem("token");
    return (
        <UserDropdownLeftAlign className="d-flex justify-content-between justify-content-md-end">
            <MobileHeading className="d-block d-md-none">Remody</MobileHeading>
            <div className="d-flex">
                {token ? (
                    <Query query={ME} variables={{ token: props.token }}>
                        {({ loading, error, data }) => {
                            if (loading) return "";

                            if (error) {
                                return "Please reload page!";
                            }
                            return data.me.name;
                        }}
                    </Query>
                ) : (
                    "Please login our Site!"
                )}
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="ml-3 mr-3"
                    style={{
                        position: "relative",
                        top: "5px",
                        cursor: "pointer"
                    }}
                    onClick={() => handleDropDown(!isOpen)}
                />
                <Dropdown
                    isOpen={isOpen}
                    toggle={() => handleDropDown(!isOpen)}
                >
                    <div className="d-block d-md-none">
                        {sideItemArray.map(item => (
                            <LinkDropDown
                                key={item.name}
                                name={item.name}
                                url={item.url}
                                handleDropDown={handleDropDown}
                            />
                        ))}
                        <Devider />
                    </div>
                    {!token ? (
                        <>
                            <DropdownItem
                                onClick={() => props.handleLoginModal(true)}
                            >
                                로그인
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => props.handleSignUpModal(true)}
                            >
                                회원가입
                            </DropdownItem>
                        </>
                    ) : (
                        <>
                            <DropdownItem onClick={() => handleDropDown(false)}>
                                내 정보 수정
                            </DropdownItem>
                            <DropdownItem onClick={() => handleDropDown(false)}>
                                내가 등록한 파일
                            </DropdownItem>
                            <Devider />
                            <DropdownItem
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    handleDropDown(false);
                                    window.location.reload();
                                }}
                            >
                                로그아웃
                            </DropdownItem>
                        </>
                    )}
                </Dropdown>
            </div>
        </UserDropdownLeftAlign>
    );
};

export default UserDropdown;
