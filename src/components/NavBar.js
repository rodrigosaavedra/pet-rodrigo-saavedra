import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CarWidget from './CarWidget';

const NavBar=({menu1,menu2,menu3})=>{
    
        return(
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href=''>{menu1}</Nav.Link>
                            <Nav.Link href=''>{menu2}</Nav.Link>
                            <Nav.Link href=''>{menu3}</Nav.Link>
                            <Nav.Link href=''>{<CarWidget/>}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        )
    
}
export default NavBar;