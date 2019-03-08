import React from "react";
import styled from "styled-components";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDropdownLeftAlign = styled.div`
	justify-content: flex-end;
	position: relative;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 0px;
`;

const UserDropdown = () => {
	return (
		<UserDropdownLeftAlign className="mt-4 d-none d-md-flex">
			UserName <FontAwesomeIcon icon={faHome} />
			<Dropdown />
		</UserDropdownLeftAlign>
	);
};

export default UserDropdown;
