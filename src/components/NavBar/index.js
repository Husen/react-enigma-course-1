import React from "react";
import {Button, Container, Navbar} from 'react-bootstrap'
import {NavLink, useNavigate} from "react-router-dom";

import {StyledNav} from "./styles";
import constants from "../../constants";
import useToken from "../../hooks/useToken";

const menu = [
    { path: constants.ROUTES.COURSE, menuName: "Course" },
    { path: constants.ROUTES.COURSE_TYPE, menuName: "Course Type" },
]

const NavBarComp = () => {
    const {removeToken} = useToken();
    const navigate = useNavigate();
    const onLogout = () => {
        removeToken();
        navigate(constants.ROUTES.LOGIN);
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Navbar.Brand>Enigma Course</Navbar.Brand>
                <StyledNav>
                    {menu?.map((item, index) => (
                        <NavLink
                            to={item.path}
                            className="nav-link mx-3"
                            key={index}
                        >
                            {item.menuName}
                        </NavLink>
                    ))}
                    <Button variant="primary" onClick={onLogout}>
                        Logout
                    </Button>
                </StyledNav>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;
