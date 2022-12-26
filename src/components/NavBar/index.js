import React from "react";
import {Container, Navbar, NavLink} from 'react-bootstrap'

import {StyledNav} from "./styles";

const NavBarComp = ({menu}) => (
    <Navbar bg="light" expand="light" sticky={"top"}>
        <Container>
            <Navbar.Brand>Enigma Course</Navbar.Brand>
            <StyledNav>
                {menu?.map((item, index) => (
                    <NavLink onClick={item.onNavigate} className="nav-link mx-3" key={index}>
                        {item.name}
                    </NavLink>
                ))}
            </StyledNav>
        </Container>
    </Navbar>
)

export default NavBarComp;
