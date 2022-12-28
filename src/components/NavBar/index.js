import React from "react";
import {Container, Navbar, NavLink} from 'react-bootstrap'
import {Link} from "react-router-dom";

import {StyledNav} from "./styles";
import constants from "../../constants";

const menu = [
    { path: constants.ROUTES.COURSE_LIST, menuName: "Course List" },
    { path: constants.ROUTES.COURSE_TYPE, menuName: "Course Type" },
]

const NavBarComp = () => (
    <Navbar bg="light" expand="light" sticky={"top"}>
        <Container>
            <Navbar.Brand>Enigma Course</Navbar.Brand>
            <StyledNav>
                {menu?.map((item, index) => (
                    <Link to={item.path} className="nav-link mx-3" key={index}>
                        {item.menuName}
                    </Link>
                ))}
            </StyledNav>
        </Container>
    </Navbar>
)

export default NavBarComp;
